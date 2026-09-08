import re
import os

raw_data = """
PR 104 | Glass Soap Dish | Brass + Glass | Chrome Finish | 1530
PR 106 | Tumbler Holder | Brass + Glass | Chrome Finish | 1530
PR 103 | Towel Bar | Brass | Chrome Finish | 2790
PR 102 | Napking Ring | Brass | Chrome Finish | 1440
PR 101 | Soap Holder | Brass | Chrome Finish | 1350
PR 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 2250
PR 109 | Towel Rack | Brass | Chrome Finish | 600MM | 7400
PR 110 | Toilet Brush Holder | Brass + Glass | Chrome Finish | 2700
PR 107 | Roll Holder With Flap | Brass | Chrome Finish | 2250
PR 108 | Robe Hook | Brass | Chrome Finish | 990
SG 110 | Towel Rack with Shelf | Brass | Chrome Finish | 600MM | 10800
SG 109 | Towel Rack | Brass | Chrome Finish | 8400
SG 101 | Soap Holder | Brass | Chrome Finish | 2610
SG 102 | Napking Ring | Brass | Chrome Finish | 2610
SG 103 | Towel Bar | 600mm | Brass | Chrome Finish | 5700
SG 104 | Tumbler Holder | Brass + Glass | Chrome Finish | 2700
SG 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 3600
SG 106 | Paper Holder | Brass | Chrome Finish | 1800
SG 107 | Roll Holder With Mobile Stand | Brass | Chrome Finish | 3600
SG 108 | Robe Hook | Brass | Chrome Finish | 990
FT 109 | Towel Rack | Brass | Chrome Finish | 8450
FT 107 | Roll Holder With Mobile Stand | Brass | Chrome Finish | 3200
FT 110 | Towel Rack With Shelf | Brass | Chrome Finish | 10800
FT 101 | Soap Holder | Brass | Chrome Finish | 2350
FT 102 | Napkin Holder | Brass | Chrome Finish | 3200
FT 103 | Towel Bar | 600mm | Brass | Chrome Finish | 5650
FT 105 | Tumbler Holder | Brass + Glass | Chrome Finish | 2430
FT 104 | Liquid Dispenser | Brass + Glass | Chrome Finish | 3510
FT 108 | Tumbler + Liquid+ Napkin Ring Holder | Brass + Glass | Chrome Finish | 600mm | 7500
FT 106 | Paper Holder | Brass | Chrome Finish | 2100
FT 111 | Tumbler + Liquid Dispenser | Brass + Glass | Chrome Finish | 4500
SLT 111-A | Towel Rack | 600mm | 6450
SLT 111-B | Towel Rack | 450mm | 6120
SLT 101 | Soap Holder | Brass | Chrome Finish | 1260
SLT 102 | Napkin Ring | Brass | Chrome Finish | 1260
SLT 103A | Towel Bar | 600mm | 2160
SLT 103B | Towel Bar | 450mm | 1980
SLT 104 | Soap Holder | Brass + Glass | Chrome Finish | 1080
SLT 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 1260
SLT 106 | Tumbler Holder | Brass + Glass | Chrome Finish | 1170
SLT 107 | Paper Holder With Flap | Brass | Chrome Finish | 1890
SLT 108 | Robe Hook | Brass | Chrome Finish | 810
SLT 109 | Dual Soup Dish | Brass | Chrome Finish | 2160
SLT 110 | Soap + Tumbler Holder | Brass + Glass | Chrome Finish | 2160
SLT 112 | Liquid Dispenser + Tumbler Holder | Brass + Glass | Chrome Finish | 2160
SW 109A | Towel Rack | Brass | Chrome Finish | 600mm | 7200
SW 109B | Towel Rack | 450mm | 7000
SW 101 | Soap Holder | Brass | Chrome Finish | 1350
SW 102 | Napkin Ring | Brass | Chrome Finish | 1350
SW 103A | Towel Bar | 600mm | 2590
SW 103B | Towel Bar | 450mm | 2450
SW 104 | Soap Holder | Brass + Glass | Chrome Finish | 1350
SW 106 | Tumbler Holder | Brass + Glass | Chrome Finish | 1575
SW 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 2250
SW 107 | Paper Holder With Flap | Brass | Chrome Finish | 2300
SW 108 | Robe Hook | Brass + Glass Finish | 900
SW-G 109 | Towel Rack | Brass | PVD Gold Finish | 9900
SW-G 101 | Soap Holder | Brass | PVD Gold Finish | 1900
SW-G 102 | Napkin Ring | Brass | PVD Gold Finish | 1800
SW-G 103 | Towel Bar | Brass | PVD Gold Finish | 3780
SW-G 104 | Soap Holder | Brass + Glass | PVD Gold Finish | 2300
SW-G 106 | Tumbler Holder | Brass + Glass | PVD Gold Finish | 1970
SW-G 105 | Liquid Dispenser | Brass + Glass | PVD Gold Finish | 3600
SW-G 107 | Paper Holder With Flap | Brass | PVD Gold Finish | 3600
SW-G 108 | Robe Hook | Brass + Glass | PVD Gold Finish | 1200
SW-RG 109 | Towel Rack | Brass | PVD Rose Gold Finish | 9990
SW-RG 101 | Soap Holder | Brass | PVD Rose Gold Finish | 1900
SW-RG 102 | Napkin Ring | Brass | PVD Rose Gold Finish | 1800
SW-RG 103 | Towel Bar | Brass | PVD Rose Gold Finish | 3780
SW-RG 104 | Soap Holder | Brass + Glass | PVD Rose Gold Finish | 2300
SW-RG 106 | Tumbler Holder | Brass | PVD Rose Gold Finish | 1970
SW-RG 105 | Liquid Dispenser | Brass | PVD Rose Gold Finish | 3600
SW-RG 107 | Paper Holder With Flap | Brass | PVD Rose Gold Finish | 3600
SW-RG 108 | Robe Hook | Brass + Glass | PVD Rose Gold Finish | 1200
UN-BG 108 | Towel Rack | Brass | Black Gold Finish | 600mm | 8100
UN-BG 103 | Towel Bar | Brass | Black Gold | 4230
UN-BG 102 | Napking Ring | Brass | Black Gold | 3870
UN-BG 105 | Tumbler Holder | Brass+ Glass | Black Gold Finish | 2700
UN-BG 104 | Liquid Dispenser | Brass + Glass | Black Gold Finish | 3870
UN-BG 101 | Glass Soap Dish | Brass | Black Gold Finish | 2700
UN-BG 106 | Paper Holder | Brass | Black Gold Finish | 3150
UN-BG 107 | Robe Hook | Brass | Black Gold Finish | 2070
SP-G 108 | Towel Rack Double | Brass | PVD Gold Finish | 13500
SP-G 101 | Soap Holder | Brass | PVD Gold Finish | 3600
SP-G 102 | Napkin Ring | Brass | PVD Gold Finish | 4230
SP-G 104 | Tumbler Holder | Brass + Glass | PVD Gold Finish | 3870
SP-G 105 | Liquid Dispenser | Brass + Glass | PVD Gold Finish | 4770
SP-G 103 | Towel Bar | 600mm | Brass | PVD Gold Finish | 6750
SP-G 106 | Paper Holder With Flap | Brass | PVD Gold Finish | 4950
SP-G 107 | Robe Hook | Brass | PVD Gold Finish | 2890
SP-RG 108 | Towel Rack | Brass | PVD Rose Gold Finish | 13500
SP-RG 101 | Soap Holder | Brass | PVD Rose Gold Finish | 3600
SP-RG 102 | Napkin Ring | Brass | PVD Rose Gold Finish | 4230
SP-RG 104 | Tumbler Holder | Brass + Glass | PVD Rose Gold Finish | 3870
SP-RG 105 | Liquid Dispenser | Brass + Glass | PVD Rose Gold Finish | 4770
SP-RG 103 | Towel Bar | 600mm | Brass | PVD Rose Gold Finish | 6750
SP-RG 106 | Paper Holder With Flap | Brass | PVD Rose Gold Finish | 4950
SP-RG 107 | Robe Hook | Brass | PVD Rose Gold Finish | 2890
SP 108 | Towel Rack | Brass | Chrome Finish | 8730
SP 101 | Soap Holder | Brass | Chrome Finish | 2880
SP 102 | Napkin Ring | Brass | Chrome Finish | 3150
SP 104 | Tumbler Holder | Brass + Glass | Chrome Finish | 2970
SP 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 3780
SP 103 | Towel Bar | 600mm | Brass | Chrome Finish | 4860
SP 106 | Paper Holder With Flap | Brass | Chrome Finish | 3600
SP 107 | Robe Hook | Brass | Chrome Finish | 2160
SI-109 | Towel Rack | Brass | Chrome Finish | 600mm | 6300
SI 101 | Soap Holder | Brass | Chrome Finish | 1440
SI 102 | Napkin Ring | Brass | Chrome Finish | 1350
SI 106 | Tumbler Holder | Brass + Glass | Chrome Finish | 1620
SI 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 2700
SI 104 | Soap Holder | Brass + Glass | Chrome Finish | 1710
SI 103 | Towel Bar | 600mm | Brass | Chrome Finish | 2850
SI 107 | Paper Holder With Flap | Brass | Chrome Finish | 2160
SI 108 | Robe Hook | Brass | Chrome Finish | 990
SI-G 109 | Towel Rack | Brass | PVD Gold Finish | 600mm | 9900
SI-G 101 | Soap Holder | Brass | PVD Gold Finish | 1900
SI-G 102 | Napkin Ring | Brass | PVD Gold Finish | 1800
SI-G 106 | Tumbler Holder | Brass + Glass | PVD Gold Finish | 1970
SI-G 105 | Liquid Dispenser | Brass + Glass | PVD Gold Finish | 3600
SI-G 103 | Towel Bar | 600mm | Brass | PVD Gold Finish | 3780
SI-G 104 | Soap Holder | Brass + Glass | PVD Gold Finish | 2300
SI-G 107 | Paper Holder With Flap | Brass | PVD Gold Finish | 3600
SI-G 108 | Robe Hook | Brass | PVD Gold Finish | 1200
SI-RG 109 | Towel Rack | Brass | PVD Rose Gold Finish | 600mm | 9900
SI-RG 101 | Soap Holder | Brass | PVD Rose Gold Finish | 1900
SI-RG 102 | Napkin Ring | Brass | PVD Rose Gold Finish | 1800
SI-RG 106 | Tumbler Holder | Brass + Glass | PVD Rose Gold Finish | 1970
SI-RG 105 | Liquid Dispenser | Brass + Glass | PVD Rose Gold Finish | 3600
SI-RG 103 | Towel Bar | 600mm | Brass | PVD Rose Gold Finish | 3780
SI-RG 104 | Soap Holder | Brass + Glass | PVD Rose Gold | 2300
SI-RG 107 | Paper Holder With Flap | Brass | PVD Rose Gold Finish | 3600
SI-RG 108 | Robe Hook | Brass | PVD Rose Gold Finish | 1200
IR 107 | Paper Holder With Flap | Brass | Chrome Finish | 2430
IR 101 | Soap Holder | Brass | Chrome Finish | 1710
IR 102 | Napkin Ring | Brass | Chrome Finish | 1890
IR 105 | Tumbler Holder | Brass + Glass | Chrome Finish | 1950
IR 104 | Liquid Dispenser | Brass + Glass | Chrome Finish | 2700
IR 103 | Towel Bar | 600mm | Brass | Chrome Finish | 2850
IR 106 | Paper Holder | Brass | Chrome Finish | 1350
IR 108 | Robe Hook | Brass | Chrome Finish | 1260
IR-G 107 | Paper Holder With Flap | Brass | PVD Gold Finish | 3600
IR-G 101 | Soap Holder | Brass | PVD Gold Finish | 2430
IR-G 102 | Napkin Ring | Brass | PVD Gold Finish | 2610
IR-G 105 | Tumbler Holder | Brass + Glass | PVD Gold Finish | 2100
IR-G 104 | Liquid Dispenser | Brass + Glass | PVD Gold Finish | 3600
IR-G 103 | Towel Bar | 600mm | Brass | PVD Gold Finish | 3870
IR-G 106 | Paper Holder | Brass | PVD Gold Finish | 1710
IR-G 108 | Robe Hook | Brass | PVD Gold Finish | 1440
IR-RG 107 | Paper Holder With Flap | Brass | PVD Rose Gold Finish | 3600
IR-RG 101 | Soap Holder | Brass | PVD Rose Gold Finish | 2430
IR-RG 102 | Napkin Ring | Brass | PVD Rose Gold Finish | 2610
IR-RG 105 | Tumbler Holder | Brass + Glass | PVD Rose Gold | 2100
IR-RG 104 | Liquid Dispenser | Brass + Glass | PVD Rose Gold | 3600
IR-RG 103 | Towel Bar | 600mm | Brass | PVD Rose Gold Finish | 3870
IR-RG 106 | Paper Holder | Brass | PVD Rose Gold Finish | 1710
IR-RG 108 | Robe Hook | Brass | PVD Rose Gold Finish | 1440
OY 110 | Towel Rack with Shelf | Brass | Chrome Finish | 600MM | 5900
OY 101 | Soap Holder | Brass | Chrome Finish | 1220
OY 103 | Towel Bar | Brass | Chrome Finish | 1890
OY 102 | Napking Ring | Brass | Chrome Finish | 1440
OY 106 | Tumbler Holder | Brass + Glass | Chrome Finish | 1170
OY 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 1890
OY 104 | Double Soap Holder | Brass | Chrome Finish | 2250
OY 109 | Soap + Tumbler Holder | Brass + Glass | Chrome Finish | 2250
OY 107 | Roll Holder With Flap | Brass | Chrome Finish | 1980
OY 108 | Robe Hook | Brass | Chrome Finish | 870
OY-RG 110 | Towel Rack with Shelf | Brass | PVD Rose Gold Finish | 600MM | 8280
OY-RG 101 | Soap Holder | Brass | PVD Rose Gold Finish | 1680
OY-RG 103 | Towel Bar | Brass | PVD Rose Gold Finish | 2790
OY-RG 102 | Napking Ring | Brass | PVD Rose Gold Finish | 2160
OY-RG 106 | Tumbler Holder | Brass + Glass | PVD Rose Gold | 1530
OY-RG 105 | Liquid Dispenser | Brass + Glass | PVD Rose Gold | 2350
OY-RG 104 | Dual Soap Dish | Brass | PVD Rose Gold Finish | 3150
OY-RG 109 | Soap Dish + Tumbler Holder | Brass + Glass | PVD Rose Gold | 3150
OY-RG 107 | Roll Holder With Flap | Brass | PVD Rose Gold Finish | 2880
OY-RG 108 | Robe Hook | Brass | PVD Rose Gold Finish | 1170
OY-Black 110 | Towel Rack with Shelf | Brass | Black Matte Finish | 600MM | 6300
OY-Black 101 | Soap Holder | Brass | Black Matte Finish | 1350
OY-Black 103 | Towel Bar | Brass | Black Matte Finish | 2160
OY-Black 102 | Napking Ring | Brass | Black Matte Finish | 1620
OY-Black 106 | Tumbler Holder | Brass + Glass | Black Matte | 1350
OY-Black 105 | Liquid Dispenser | Brass + Glass | Black Matte | 2070
OY-Black 104 | Dual Soap Holder | Brass | Black Matte Finish | 2650
OY-Black 109 | Soap Dish + Tumbler Holder | Brass + Glass | Black Matte | 2650
OY-Black 107 | Roll Holder With Flap | Brass | Black Matte Finish | 2160
OY-Black 108 | Robe Hook | Brass | Black Matte Finish | 1050
OV 109-A | Towel Rack | Brass | Chrome Finish | 600mm | 5400
OV 109-B | Towel Rack | 450mm | 5220
OV 101 | Soap Holder | Brass | Chrome Finish | 1170
OV 103A | Towel Bar | 600mm | 1980
OV 103B | Towel Bar | 450mm | 1800
OV 102 | Napkin Ring | Brass | Chrome Finish | 1170
OV 106 | Tumbler Holder | Brass + Glass | Chrome Finish | 1170
OV 105 | Liquid Dispenser | Brass + Glass | Chrome Finish | 1350
OV 104 | Soap Holder | Brass + Glass | Chrome Finish | 1080
OV 107 | Paper Holder With Flapr | Brass | Chrome Finish | 1890
OV 108 | Robe Hook | Brass | Chrome Finish | 720
OV 110 | Dual Soap Dish | Brass | Chrome Finish | 1950
GR 110 | Towel Rack | SS | Chrome Finish | 2790
GR 103 | Towel Bar | SS | Chrome Finish | 945
GR 101 | Dual Soap Holder | SS | Chrome Finish | 720
GR 102A | Napkin Holder Round | SS | Chrome Finish | 750
GR 102B | Napkin Holder Square | SS | Chrome Finish | 810
GR 104 | Soap Holder | SS + Glass | Chrome Finish | 720
GR 106 | Tumbler Holder | SS + Glass | Chrome Finish | 720
GR 107 | Roll Holder With Flap | SS | Chrome Finish | 945
GR 109 | Robe Hook | SS | Chrome Finish | 450
GR 108 | Paper Holder | SS | Chrome Finish | 720
GR 105 | Liquid Dispenser | SS + Glass | Chrome Finish | 810
GR-G 110 | Towel Rack | SS | PVD Gold Finish | 600mm | 5310
GR-G 101 | Soap Holder | SS | PVD Gold Finish | 1080
GR-G 102A | Napkin Holder Round | SS | PVD Gold Finish | 1350
GR-G 102B | Napkin Holder Square | SS | PVD Gold Finish | 1430
GR-G 104 | Soap Holder | SS + Glass | PVD Gold Finish | 990
GR-G 106 | Tumbler Holder | SS + Glass | PVD Gold Finish | 1170
GR-G 107 | Roll Holder With Flap | SS | PVD Gold Finish | 2070
GR-G 108 | Robe Hook | SS | PVD Gold Finish | 650
GR-G 103 | Towel Bar | SS | PVD Gold Finish | 1530
GR-G 105 | Liquid Dispenser | SS + Glass | PVD Gold Finish | 1350
GR-RG 110 | Towel Rack | SS | PVD Rose Gold Finish | 600mm | 5310
GR-RG 101 | Soap Holder | SS | PVD Rose Gold Finish | 1080
GR-RG 102A | Napkin Holder Round | SS | Rose Gold Finish | 1350
GR-RG 102B | Napkin Holder Square | SS | Rose Gold Finish | 1430
GR-RG 104 | Soap Holder | SS + Glass | Rose Gold Finish | 990
GR-RG 106 | Tumbler Holder | SS + Glass | PRose Gold Finish | 1170
GR-RG 107 | Roll Holder With Flap | SS | PVD Rose Gold Finish | 2070
GR-RG 108 | Robe Hook | SS | PVD Rose Gold Finish | 650
GR-RG 103 | Towe Bar | SS | PVD Rose Gold Finish | 1530
GR-RG 105 | Liquid Dispenser | SS + Glass | PVD Rose Gold | 1350
GR-Black 110 | Towel Rack | SS | PVD Black Finish | 600mm | 5900
GR-Black 101 | Soap Holder | SS | PVD Black Finish | 1260
GR-Black 102A | Napkin Holder Round | SS | PVD Black Finish | 1530
GR-Black 102B | Napkin Holder Square | SS | PVD Black Finish | 1530
GR-Black 104 | Soap Holder | SS + Glass | PVD Black Finish | 1080
GR-Black 105 | Liquid Dispenser | SS + Glass | PVD Black Finish | 1440
GR-Black 103 | Towel Bar | SS | PVD Black Finish | 1710
GR-Black 106 | Tumbler Holder | SS + Glass | PVD Black Finish | 1350
GR-Black 107 | Roll Holder With Flap | SS + Glass | PVD Black Finish | 2450
GR-Black 109 | Robe Hook | SS + Glass | PVD Black Finish | 675
RT 110 | Towel Rack | SS | Chrome Finish | 3250
RT 103 | Towel Bar | SS | Chrome Finish | 990
RT 101 | Soap Holder | SS | Chrome Finish | 810
RT 102 | Napkin Ring | SS | Chrome Finish | 720
RT 104 | Liquid Dispenser | SS + Glass | Chrome Finish | 1260
RT 105 | Tumbler Holder | SS + Glass | Chrome Finish | 880
RT 106 | Roll Holder With Flap | SS | Chrome Finish | 1260
RT 107 | Dual Soap Holder | SS | Chrome Finish | 1260
RT 108 | Tumbler + Soap Holder | SS + Glass | Chrome Finish | 1260
RT 109 | Robe Hook | SS | Chrome Finish | 595
RT-G 110 | Towel Rack | SS | PVD Gold Finish | 5400
RT-G 103 | Towel Bar | SS | PVD Gold Finish | 1620
RT-G 101 | Soap Holder | SS | PVD Gold Finish | 1170
RT-G 102 | Napkin Ring | SS | PVD Gold Finish | 1130
RT-G 104 | Liquid Dispenser | SS + Glass | PVD Gold Finish | 1530
RT-G 105 | Tumbler Holder | SS + Glass | PVD Gold Finish | 1260
RT-G 106 | Roll Holder With Flap | SS | PVD Gold Finish | 1950
RT-G 107 | Dual Soap Holder | SS | PVD Gold Finish | 2250
RT-G 108 | Tumbler + Soap Holder | SS + Glass | PVD Gold Finish | 2250
RT-G 109 | Robe Hook | SS | PVD Gold Finish | 720
RT-RG 110 | Towel Rack | SS | PVD Rose Gold Finish | 5400
RT-RG 103 | Towel Bar | SS | PVD Rose Gold Finish | 1620
RT-RG 101 | Soap Holder | SS | PVD Rose Gold Finish | 1170
RT-RG 102 | Napkin Ring | SS | PVD Rose Gold Finish | 1130
RT-RG 104 | Liquid Dispenser | SS + Glass | PVD Rose Gold | 1530
RT-RG 105 | Tumbler Holder | SS + Glass | PVD Rose Gold | 1260
RT-RG 106 | Roll Holder With Flap | SS | PVD Rose Gold Finish | 1950
RT-RG 107 | Dual Soap Holder | SS | PVD Rose Gold Finish | 2250
RT-RG 108 | Tumbler + Soap Holder | SS + Glass | PVD Rose Gold | 2250
RT-RG 109 | Robe Hook | SS | PVD Rose Gold Finish | 720
RT BLack 110 | Towel Rack | SS | PVD Black Finish | 5940
RT BLack 103 | Towel Bar | SS | PVD Black Finish | 1800
RT BLack 101 | Soap Holder | SS | PVD Black Finish | 1350
RT BLack 102 | Napkin Ring | SS | PVD Black Finish | 1350
RT BLack 104 | Liquid Dispenser | SS + Glass | PVD Black Finish | 1650
RT BLack 105 | Tumbler Holder | SS + Glass | PVD Black Finish | 1440
RT BLack 106 | Roll Holder With Flap | SS | PVD Black Finish | 2430
RT BLack 107 | Dual Soap Holder | SS | PVD Black Finish | 2430
RT BLack 108 | Tumbler + Soap Holder | SS + Glass | PVD Black Finish | 2510
RT BLack 109 | Robe Hook | SS | PVD Black Finish | 710
DL 110 | Towel Rack | SS | Chrome Finish | 600mm | 2340
DL 103 | Towel Bar | SS | Chrome Finish | 600mm | 1080
DL 101 | Soap Holder | SS | Chrome Finish | 700
DL 102 | Napking Ring | SS | Chrome Finish | 700
DL 104 | Liquid Dispenser | SS + Glass | Chrome Finish | 1170
DL 105 | Tumbler Holder | SS + Glass | Chrome Finish | 720
DL 106 | Roll Holder With Flap | SS | Chrome Finish | 945
DL 107 | Robe Hook | SS | Chrome Finish | 252
DL 108 | Tumbler + Soap Holder | SS + Glass | Chrome Finish | 1170
DL 109 | Dual Soap Holder | SS | Chrome Finish | 1080
FTR-01 | Folding Rack | SS | Chrome Finish | 2160
FTR-02 | Floding Rack With Shelf | SS | Chrome Finish | 3000
RMTR-01 | Rotating Multiple Towel Rod | SS | Chrome Finish | 1550
DTB-01 | Double Towel Bar | SS | Chrome Finish | 1350
HGB-01 | Handicap Grab Bar | SS - 304 | Chrome Finish / Matt Finish | 9900
GB-300 | Grab Bar | Bras & SS - 304 | Chrome Finish | 300mm | 2430
GB-400 | Grab Bar | Bras & SS - 304 | Chrome Finish | 400mm | 2700
GB-25300 | Grab Bar | Bras & SS - 304 | Chrome Finish | 25X300mm | 900
GB-25450 | Grab Bar | Bras & SS - 304 | Chrome Finish | 25X450mm | 1080
GB-25600 | Grab Bar | Bras & SS - 304 | Chrome Finish | 25X600mm | 1350
TBH-SQ | Toilet Brush Holder Square | Brass | Chrome Finish | 2610
TBH-RD | Toilet Brush Holder Round | Brass | Chrome Finish | 2610
CGS 01 | COAD | 8"X8" | Chrome Finish | 1300
CGS 02 | COAD | 10"X10" | Chrome Finish | 1400
CGS 03 | COAD | 12"X12 | Chrome Finish | 1500
HCGS 01 | COAD | 8"X8" | Chrome Finish | 1620
HCGS 02 | COAD | 10"X10" | Chrome Finish | 1800
HCGS 03 | COAD | 12"X12 | Chrome Finish | 1980
FGS 01 | COAD | 10"X6" | Chrome Finish | 1260
FGS 02 | COAD | 12"X6 | Chrome Finish | 1350
FGS 03 | COAD | 14"X6 | Chrome Finish | 1440
FGS 04 | COAD | 16"X6 | Chrome Finish | 1710
HFGS 01 | COAD | 10"X6" | Chrome Finish | 1800
HFGS 02 | COAD | 12"X6 | Chrome Finish | 1890
HFGS 03 | COAD | 14"X6 | Chrome Finish | 1980
HFGS 04 | COAD | 16"X6 | Chrome Finish | 2100
HCGS Matte Black - 02 (10x10) | Matte Black | Brass + Glass | Matte Black Finish | 10"X10" | 3000
HCGS Matte Black - 02 (12x5) | Matte Black | Brass + Glass | Matte Black Finish | 12"X5" | 3150
HCGS Matte Black - 04 | Matte Black | Brass + Glass | Matte Black Finish | 16"X5" | 3570
HCGS Gold - 02 (10x10) | Gold | Brass + Glass | Gold Finish | 10"X10" | 3000
HCGS Gold - 02 (12x5) | Gold | Brass + Glass | Gold Finish | 12"X5" | 3150
HCGS Gold - 04 | Gold | Brass + Glass | Gold Finish | 16"X5" | 3570
HCGS Rose Gold - 02 (10x10) | ROSE GOLD | Brass + Glass | Rose Gold Finish | 10"X10" | 3000
HCGS Rose Gold - 02 (12x5) | ROSE GOLD | Brass + Glass | Rose Gold Finish | 12"X5" | 3150
HCGS Rose Gold - 04 | ROSE GOLD | Brass + Glass | Rose Gold Finish | 16"X5" | 3570
KH-RD-3 | Brass Khutti - Round 3 Hook | Brass | Chrome | 585
KH-RD-4 | Brass Khutti - Round 4 Hook | Brass | Chrome | 765
KH-RD-6 | Brass Khutti - Round 6 Hook | Brass | Chrome | 1080
KH-RD-8 | Brass Khutti - Round 8 Hook | Brass | Chrome | 1350
KH-SQ-3 | Brass Khutti - Square 3 Hook | Brass | Chrome | 600
KH-SQ-4 | Brass Khutti - Square 4 Hook | Brass | Chrome | 810
KH-SQ-6 | Brass Khutti - Square 6 Hook | Brass | Chrome | 1170
KH-SQ-8 | Brass Khutti - Square 8 Hook | Brass | Chrome | 1440
CL-1 | Cloth Liner | Brass | Chrome | 1080
WMLD-1 | Brass Wall Mounted Liquid Dispenser | Brass | Chrome | 2250
SM-CH | Shaving Mirror (3x Zoom) Brass | Chrome Finish | 3750
SM-GD | Shaving Mirror (3x Zoom) Brass | Gold Finish | 4350
SM-BK | Shaving Mirror (3x Zoom) Brass | Black Finish | 4350
SM-RG | Shaving Mirror (3x Zoom) Brass | Rose Gold Finish | 4350
FMLD - 02 | Floor Mount - Liquid Dispenser | Brass + Glass | Chrome Finish | 2700
FMLD - 01 | Floor Mount - Tumbler Holder | Brass | Chrome Finish | 2100
FMSH - 02 | Floor Mount - Soap Holder | Brass + Glass | Chrome Finish | 1800
JTD-501 | SS 304 Marble / Tile Drainer | 450mm X 100mm X 20mm | 4050
JTD-502 | SS 304 Marble / Tile Drainer | 600mm X 100mm X 20mm | 5220
JTD-507 | SS 304 Marble / Tile Drainer | 750mm X 100mm X 20mm | 7200
JTD-503 | SS 304 Marble / Tile Drainer | 900mm X 100mm X 20mm | 8550
JTD-504 | SS 304 Marble / Tile Drainer | 1200mm X 100mm X 20mm | 12600
JSC-401 | SS 304 Shower Channel | 450mm X 100mm X 20mm | 3510
JSC-402 | SS 304 Shower Channel | 600mm X 100mm X 20mm | 4320
JSC-405 | SS 304 Shower Channel | 750mm X 100mm X 20mm | 5580
JSC-403 | SS 304 Shower Channel | 900mm X 100mm X 20mm | 6750
JSC-404 | SS 304 Shower Channel | 1200mm X 100mm X 20mm | 9900
JSC-302 | SS 304 Shower Channel | 600mm X 100mm X 20mm | 4770
JSC-303 | SS 304 Shower Channel | 900mm X 100mm X 20mm | 7650
JSC Gold-602 | PVD Gold Shower Channel | 600mm X 100mm X 20mm | 6900
JSC Gold-603 | PVD Gold Shower Channel | 900mm X 100mm X 20mm | 10350
JSC Rose Gold-602 | PVD Rose Gold Shower Channel | 600mm X 100mm X 20mm | 6900
JSC Rose Gold-603 | PVD Rose Gold Shower Channel | 900mm X 100mm X 20mm | 10350
JSC Black-602 | PVD Black Shower Channel | 600mm X 100mm X 20mm | 7650
JSC Black-603 | PVD Black Shower Channel | 900mm X 100mm X 20mm | 11370
JSC-602 | PVD Matte Finish Shower Channel | 600mm X 100mm X 20mm | 4350
JSC-603 | PVD Matte Finish Shower Channel | 900mm X 100mm X 20mm | 6750
JGR-G-002 | PVD Gold Rolex | 150mm X 150mm | 1530
JGR-RG-002 | PVD Rose Gold Rolex | 150mm X 150mm | 1530
JGR-BL-002 | PVD Black Rolex | 150mm X 150mm | 1530
JTD-G-506 | PVD gold MARBLE/TILE DRAINER with trapper | 150mm X 150mm X 20mm | 2520
JTD-RG-506 | PVD Rose gold MARBLE/TILE DRAINER with trapper | 150mm X 150mm X 20mm | 2520
JTD-505 | SS 304 MARBLE/TILE DRAINER WITH TRAPPER | 127MM X 127MM X 20MM | 1260
JTD-506 | SS 304 MARBLE/TILE DRAINER WITH TRAPPER | 150MM X 150MM X 20MM | 1440
JGR-001 | SS GRATING | 150MM X 150MM | 540
JGR-002 | SS GRATING | 150MM X 150MM | 540
JGR-003 | SS GRATING | 150MM X 150MM | 540
JGR-004 | SS GRATING | 150MM X 150MM | 540
SSG-RLX-150 | SS GRATING 304 ROLEX JALI WITH HOLE | 150MM X 150MM | 585
SSG-LIN-150 | SS GRATING 304 LINEAR JALI WITH FRAME | 150MM X 150MM | 250
SSG-COR-200 | SS GRATING 304 CORNER JALI WITH FRAME | 200MM X 200MM | 1800
SSG-CT-150 | SS GRATING 304 COCKROACH TRAP | 150MM X 150MM | 810
SSG-CT-125 | SS GRATING 304 COCKROACH TRAP | 125MM X 125MM | 750
SSG-CTH-150 | SS GRATING 304 COCKROACH TRAP WITH HOLE | 150MM X 150MM | 810
SSG-CTH-125 | SS GRATING 304 COCKROACH TRAP WITH HOLE | 125MM X 125MM | 750
SSG-RND-150 | SS GRATING 304 ROUND JALI WITH FRAME | 150MM X 150MM | 250
SSG-RNDH-150 | SS GRATING 304 ROUND JALI WITH HOLE | 150MM X 150MM | 225
JW SA 201 | SHOWER ARM RECTANGLE | 15 INCH | 540
JW SA 202 | SHOWER ARM RECTANGLE | 18 INCH | 650
JW SA 203 | SHOWER ARM RECTANGLE | 24 INCH | 865
JW SA 204 | SHOWER ARM ROUND | 12 INCH | 420
JW SA 205 | SHOWER ARM ROUND | 18 INCH | 630
JW SA 206 | SHOWER ARM ROUND | 24 INCH | 810
JW SA 207 | SHOWER ARM CURVE | 6 INCH | 225
JW SA 208 | SHOWER ARM CURVE | 9 INCH | 330
JW SA 209 | SHOWER ARM CURVE | 12 INCH | 400
JW SA 210 | SHOWER ARM BEND | 12 INCH | 420
JW SA 211 | SHOWER ARM BEND | 18 INCH | 630
JW SA 212 | SHOWER ARM BEND | 24 INCH | 810
JW SA 213 | CEILING SHOWER ARM ROUND | 12 INCH | 540
JW SA 214 | CEILING SHOWER ARM SQUARE | 12 INCH | 540
JW SA 215 | SHOWER ARM CROSS | 9 INCH | 420
JW SA 216 | SHOWER ARM CROSS | 12 INCH | 630
JW SA 217 | SHOWER ARM SQUARE BEND | 12 INCH | 600
JW SA 218 | SHOWER ARM SQUARE BEND | 18 INCH | 690
JW SA 219 | SHOWER ARM SQUARE BEND | 24 INCH | 900
JW SA 220 | SHOWER ARM SQUARE L TYAPE | 18 INCH | 1080
JW SA 221 | SHOWER ARM ROUND L TYAPE | 18 INCH | 1080
JW SA 222 | SQUARE WALL FLANGE | 50mmX50mm | 48
JW SA 223 | ROUND WALL FLANGE HEAVY | 75mm | 44
JW SA 224 | ROUND WALL FLANGE REGULAR | 75mm | 18
AV-ORN | ORNAMIX ANGLE VALVE | BRASS | CHROME FINISH | 500
AV-FLO | FLORENTINE ANGLE VALVE | BRASS | CHROME FINISH | 450
AV-HEX | HEXA ANGLE VALVE | BRASS | CHROME FINISH | 540
AV-TRI | TRIONE ANGLE VALVE | BRASS | CHROME FINISH | 540
AV-SQ | SQUARE ANGLE VALVE | BRASS | CHROME FINISH | 540
AV-GEM | ANGLE VALVE GEM | BRASS | CHROME FINISH | 495
WCRB-1 | WC RACK BOLT | 495
BCE-SIL | BRASS CP EXTENSION | SILVER | 65
BCE-PLA | BRASS CP EXTENSION | PLATINUM | 85
MSBF-1 | MS BASIN FASTENER | 80
CPP-1 | CP PLUG | 70
SAK-1 | SS ALLEN KEY SET | 750
SSBF-1 | SS BASIN FASTENER | 135
ELB-1 | ELBOW | 210
CBN-1 | CP. BARREL NIPPLE | 80
HN-1 | HEX NIPPLE | 72
CPT-1 | CP-TEE | 230
WMA-1 | WASHING MACHINE ADAPTER | 120
CPS-1 | CP SOCKET | 80
BBT-30300 | BRASS BOTTLE TRAP PIPE WITH COLLAR | 30X300 mm | Brass | 390
BBT-30450 | BRASS BOTTLE TRAP PIPE WITH COLLAR | 30X450 mm | Brass | 585
BBT-30600 | BRASS BOTTLE TRAP PIPE WITH COLLAR | 30X600 mm | Brass | 780
BBT-32300 | BRASS BOTTLE TRAP PIPE WITH COLLAR | 32X300 mm | Brass | 390
BBT-35450 | BRASS BOTTLE TRAP PIPE WITH COLLAR | 35X450 mm | Brass | 585
BBT-35600 | BRASS BOTTLE TRAP PIPE WITH COLLAR | 35X600 mm | Brass | 780
UPV-1 | URINAL PUSH VALVE | BRASS | CHROME FINISH | 550
US-1 | URINAL SPREADER | BRASS | CHROME FINISH | 495
ROV-1 | RO VALVE | BRASS | CHROME FINISH | 210
CPL-1 | SUPREME HEAVY WASTE COUPLING FT/HT | FULL BRASS | CHROME FINISH | 540
CPL-2 | REGULAR WASTE COUPLING FT/HT | FULL BRASS | CHROME FINISH | 450
CPL-3 | SS WASTE COUPLING HEAVY | 230
CPL-4 | HEAVY LONG WASTE COUPLING FT/HT 125 MM (5") | FULL BRASS | CHROME FINISH | 720
CPL-5 | REGULAR LONG WASTE COUPLING FT/HT 150 MM (6") | FULL BRASS | CHROME FINISH | 540
CPL-6 | SS WASTE COUPLING HEAVY | 330
CPL-7 | URINAL WASTE COUPLING FT/HT | FULL BRASS | CHROME FINISH | 520
CPL-8 | POP-UP WASTE COUPLING FULL THREAD | FULL BRASS | CHROME FINISH | 700
GSK-1 | WC RUBBER GASKET | 135
GSK-2 | BEND WC GASKET | 360
GSK-3 | WC GASKET | 500
GSK-4 | STRAIGHT WC GASKET | 360
GSK-5 | WC FLEXIBLE CONVERSION GASKET | 900
GSK-6 | TEFLON TAPE | 25
"""

categories_map = {
    "towel-rod": ["towel rack", "towel bar", "towel rod", "towe bar"],
    "glass-shelf": ["glass shelf", "glass soap dish", "coad"],
    "soap-dispenser": ["liquid dispenser", "soap dispenser"],
    "paper-holder": ["paper holder", "roll holder"],
    "robe-hook": ["robe hook", "khutti", "cloth liner", "hook"],
    "towel-ring": ["napkin ring", "towel ring", "napking ring", "napkin holder"],
    "tumbler-holder": ["tumbler holder"],
    "toothbrush-holder": ["toothbrush holder"],
    "toilet-brush-holder": ["toilet brush holder"],
    "bathroom-shelf": ["bathroom shelf", "shelf", "rack with shelf"],
    "corner-shelf": ["corner shelf"],
    "double-robe-hook": ["double robe hook"],
    "towel-bar": ["towel bar"],
    "bathroom-rack": ["bathroom rack", "folding rack"],
    "shower-drainer": ["drainer", "shower channel", "grating", "cockroach trap", "jali", "rolex"],
    "shower-arm": ["shower arm", "wall flange"],
    "angle-valve": ["angle valve"],
    "allied-product": ["rack bolt", "extension", "fastener", "plug", "allen key", "elbow", "nipple", "tee", "adapter", "socket", "bottle trap", "valve", "spreader"],
    "waste-coupling": ["waste coupling"],
    "gasket": ["gasket", "tape"],
    "mirror": ["mirror"],
    "floor-accessory": ["floor mount"],
}

def guess_category(name):
    name_lower = name.lower()
    for cat, keywords in categories_map.items():
        if any(kw in name_lower for kw in keywords):
            return cat
    if "soap" in name_lower and "holder" in name_lower:
        return "soap-dispenser"
    return "towel-rod" # default

def guess_finish(item_str):
    item_str = item_str.lower()
    if "rose gold" in item_str:
        return "Rose Gold"
    elif "black" in item_str or "matte" in item_str or "matt" in item_str:
        return "Matt Black"
    elif "graphite grey" in item_str:
        return "Graphite Grey"
    elif "gold" in item_str:
        return "Brushed Gold"
    elif "chrome" in item_str:
        return "Chrome"
    elif "nickel" in item_str:
        return "Brushed Nickel"
    else:
        return "Chrome"

lines = [line.strip() for line in raw_data.strip().split('\n') if line.strip()]

images_dir = "JOY WATER BATHROOM ACCESSORIES (1)"
image_files = sorted([f for f in os.listdir(images_dir) if f.lower().endswith(('.jpg', '.png'))], 
                     key=lambda x: int(os.path.splitext(x)[0]) if os.path.splitext(x)[0].isdigit() else 999)

out_ts = """import { Product } from "./types";

// Bathroom Accessories Products
// Images are in: /JOY WATER BATHROOM ACCESSORIES (1)/ folder

export const bathroomAccessoriesProducts: Product[] = [
"""

for i, line in enumerate(lines):
    parts = [p.strip() for p in line.split('|')]
    if len(parts) >= 3:
        code = parts[0]
        name = parts[1]
        price = parts[-1]
        
        # fallback category and finish logic
        cat = guess_category(name)
        fin = guess_finish(line)
        
        img = image_files[i] if i < len(image_files) else image_files[-1]
        
        # fix price (remove non-digits if any)
        price_num = re.sub(r'\D', '', price)
        if not price_num:
            price_num = "0"
            
        out_ts += f'''  {{
    id: "product-{i + 1}",
    name: "{name}",
    slug: "product-{i + 1}",
    category: "{cat}",
    finish: "{fin}",
    price: {price_num},
    code: "{code}",
    image: "/JOY WATER BATHROOM ACCESSORIES (1)/{img}"
  }},
'''

out_ts = out_ts.rstrip(',\n') + "\n];\n"

with open("src/lib/catalog/bathroomAccessoriesProducts.ts", "w", encoding="utf-8") as f:
    f.write(out_ts)

print(f"Successfully processed {len(lines)} products.")
