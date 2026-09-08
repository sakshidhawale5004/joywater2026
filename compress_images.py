from PIL import Image
import os
import sys

def compress_image(input_path, output_path, quality=85, max_width=1200):
    """
    Compress an image while maintaining reasonable quality
    
    Args:
        input_path: Path to input image
        output_path: Path to save compressed image
        quality: JPEG quality (1-100, default 85)
        max_width: Maximum width in pixels (default 1200)
    """
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if needed (for PNG with transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if image is too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            return True
    except Exception as e:
        print(f"Error compressing {input_path}: {e}")
        return False

def compress_directory(input_dir, quality=85, max_width=1200):
    """Compress all images in a directory"""
    
    if not os.path.exists(input_dir):
        print(f"Directory not found: {input_dir}")
        return
    
    files = os.listdir(input_dir)
    image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    
    total_files = len(image_files)
    print(f"Found {total_files} images to compress...")
    
    original_size = 0
    compressed_size = 0
    successful = 0
    
    for i, filename in enumerate(image_files, 1):
        input_path = os.path.join(input_dir, filename)
        
        # Get original size
        orig_size = os.path.getsize(input_path)
        original_size += orig_size
        
        # Compress image (overwrite original)
        if compress_image(input_path, input_path, quality, max_width):
            new_size = os.path.getsize(input_path)
            compressed_size += new_size
            successful += 1
            
            reduction = ((orig_size - new_size) / orig_size * 100) if orig_size > 0 else 0
            
            # Print progress every 50 images
            if i % 50 == 0 or i == total_files:
                print(f"Progress: {i}/{total_files} images processed ({successful} successful)")
    
    print("\n" + "="*60)
    print(f"Compression complete!")
    print(f"Successfully compressed: {successful}/{total_files} images")
    print(f"Original total size: {original_size / (1024*1024):.2f} MB")
    print(f"Compressed total size: {compressed_size / (1024*1024):.2f} MB")
    print(f"Total reduction: {(original_size - compressed_size) / (1024*1024):.2f} MB ({((original_size - compressed_size) / original_size * 100):.1f}%)")
    print("="*60)

if __name__ == "__main__":
    accessories_dir = "JOY WATER BATHROOM ACCESSORIES (1)"
    
    print("Starting image compression...")
    print(f"Directory: {accessories_dir}")
    print(f"Settings: Quality=85, Max Width=1200px")
    print("-"*60)
    
    compress_directory(accessories_dir, quality=85, max_width=1200)
    
    print("\nDone! Images have been compressed in place.")
