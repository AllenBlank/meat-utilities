$(document).ready(function(){

  var itemNames = [
    'B101000 Beef Sample FRESH USA',
    'B101001 Beef Whole Boneless Chuck FRESH USA',
    'B101002 Beef Shoulder Clod FRESH USA',
    'B101003 Beef Flat Iron Steak Denuded FRESH USA',
    'B102001 Beef Brisket Point, Deckle On FRESH USA',
    'B102002 Beef Plate (Navel) FRESH USA',
    'B102003 Beef Outside Skirt Peeled FRESH USA',
    'B102004 Beef Inside Skirt FRESH USA',
    'B102006 Beef Flank Steak FRESH USA',
    'B102007 Beef Flap Steak (Bavette) FRESH USA',
    'B102008 Beef Foreshank Cut 2" FRESH USA',
    'B102009 Beef Plate (Navel) Brined FRESH USA',
    'B102010 Beef Brisket Point, Deckle On Brined USA',
    'B102011 Beef Shank Boneless FRESH USA',
    'B103001 Beef Rib Primal FRESH USA',
    'B103002 Beef Rib Export Style FRESH USA',
    'B103003 Beef Rib Short Ribs Cut 2" FRESH USA',
    'B103004 Beef Short Ribs Korean-Style FRESH USA',
    'B103005 Beef Ribeye Lip-On FRESH USA',
    'B103006 Beef Back Ribs FRESH USA',
    'B103007 Beef Rib Export Style Halves FRESH USA',
    'B103008 Beef Short Ribs Boneless FRESH USA',
    'B104001 Beef Tenderloin PSMO FRESH USA',
    'B104002 Beef NY Strip Boneless 1x1 FRESH USA',
    'B104003 Beef Short Loin FRESH USA',
    'B104004 Beef Tenderloin Butt (Head) FRESH USA',
    'B104005 Beef Top Sirloin Butt FRESH USA',
    'B104006 Beef Tri Tip Roast FRESH USA',
    'B104007 Beef Hanging Tender FRESH USA',
    'B105001 Beef Top Round (Inside) FRESH USA',
    'B105002 Beef Top Round (Inside) Peeled FRESH USA',
    'B105003 Beef Top Round (Inside) CapOff FRESH USA',
    'B105004 Beef Top Round Split Roll&Tie FRESH USA',
    'B105005 Beef Eye of Round FRESH USA',
    'B105006 Beef Bottom Round (Flat) FRESH USA',
    'B105007 Beef Bottom Round Heel FRESH USA',
    'B105008 Beef Bottom Round (Gooseneck) FRESH USA',
    'B105009 Beef Sirloin Tip (Knuckle) FRESH USA',
    'B105010 Beef Hindshank  2" Center Cut FRESH USA',
    'B105011 Beef Bottom Round (Flat) Retail BRINED',
    'B105012 Beef Eye of Round Brined FRESH USA',
    'B105911 Beef Bottom Round BRINED USA',
    'B106019 Beef Trim  65% FRESH USA',
    'B106020 Beef Trim  95% FRESH USA',
    'B106021 Beef Trim  75% FRESH USA',
    'B106023 Beef Trim Boneless FRESH USA',
    'B106025 Beef Hamburger Patties 4/1 FRESH USA',
    'B108110 Beef Stew FRESH USA',
    'B111001 Beef Whole Boneless Chuck FROZEN USA ',
    'B111002 Beef Shoulder Clod FROZEN USA ',
    'B111003 Beef Flat Iron Steak Denuded FROZEN USA',
    'B112001 Beef Brisket Point, Deckle On FROZEN USA',
    'B112002 Beef Plate (Navel) FROZEN USA ',
    'B112003 Beef Outside Skirt Peeled FROZEN USA',
    'B112004 Beef Inside Skirt FROZEN USA ',
    'B112006 Beef Flank Steak FROZEN USA',
    'B112007 Beef Flap Steak (Bavette) FROZEN USA',
    'B112008 Beef Foreshank Cut 2" FROZEN USA',
    'B112011 Beef Shank Boneless FROZEN USA',
    'B113002 Beef Rib Export Style FROZEN USA',
    'B113003 Beef Short Ribs  Cut 2" FROZEN USA',
    'B113004 Beef Short Ribs Korean-Style FROZEN USA',
    'B113005 Beef Ribeye FROZEN USA',
    'B113006 Beef Back Ribs FROZEN USA',
    'B113007 Beef Rib Export Style Halves FROZEN USA',
    'B113008 Beef Short Ribs Boneless FROZEN USA',
    'B113009 Beef Rib Roast 3-Rib Retail FROZEN USA',
    'B113010 Beef Rib Roast 4-Rib Retail FROZEN USA',
    'B114001 Beef Tenderloin PSMO FROZEN USA',
    'B114002 Beef NY Strip Boneless 1x1 FROZEN USA',
    'B114003 Beef Short Loin FROZEN USA',
    'B114004 Beef Tenderloin Butt (Head) FROZEN USA',
    'B114005 Beef Top Sirloin Butt FROZEN USA',
    'B114006 Beef Tri Tip Roast FROZEN USA ',
    'B114007 Beef Hanging Tender FROZEN USA ',
    'B114010 Beef NY Strip Boneless Halves FROZEN USA',
    'B114011 Beef Tenderloin Roast FROZEN USA',
    'B114912 Beef Hanger Steak Retail FROZEN USA',
    'B114913 Beef Kabob Meat 1# Retail FROZEN USA',
    'B114915 Beef NY Strip Steak 2# Retail FROZEN USA',
    'B115001 Beef Top Round (Inside) FROZEN USA ',
    'B115002 Beef Top Round (Inside)  Peeled FROZEN ',
    'B115003 Beef Top Round(Inside) CapOff FROZEN USA',
    'B115004 Beef Top Round Split Roll&Tie FROZEN USA',
    'B115005 Beef Eye of Round FROZEN USA',
    'B115006 Beef Bottom Round (Flat) FROZEN USA',
    'B115007 Beef Round Bottom Round Heel FROZEN USA',
    'B115008 Beef Bottom Round (Gooseneck) FROZEN USA',
    'B115009 Beef Sirloin Tip (Knuckle) FROZEN USA',
    'B115010 Beef Hindshank 2" Center Cut FROZEN USA',
    'B116001 Beef Cheeks FROZEN USA ',
    'B116002 Beef Oxtail FROZEN USA ',
    'B116004 Beef Tongue FROZEN USA ',
    'B116005 Beef Kidney FROZEN USA ',
    'B116006 Beef Liver FROZEN USA ',
    'B116007 Beef Whole Heart FROZEN USA ',
    'B116008 Beef Kidney Fat FROZEN USA ',
    'B116009 Beef Cod Fat FROZEN USA ',
    'B116010 Beef Bones  Marrow Cut 2" FROZEN USA ',
    'B116011 Beef Bones  Marrow Split FROZEN USA ',
    'B116012 Beef Bones  Marrow Short Split FROZEN USA ',
    'B116013 Beef Bones  Regular FROZEN USA ',
    'B116014 Beef Bones  Gelatinous FROZEN USA ',
    'B116015 Beef Bones  Meaty Neck FROZEN USA ',
    'B116016 Beef Feet FROZEN USA ',
    'B116019 Beef Trim  65% FROZEN USA ',
    'B116020 Beef Trim  95% FROZEN USA ',
    'B116021 Beef Trim  75% FROZEN USA ',
    'B116022 Beef Trim Boneless FROZEN USA ',
    'B116024 Beef Cheeks Pieces FROZEN USA ',
    'B116025 Beef Hamburger Patties 4/1 FROZEN USA ',
    'B116027 Beef Tripe FROZEN USA',
    'B116817 Beef Ground 5 lb Chub FROZEN USA',
    'B118001 Beef Fajita Bulk FROZEN USA',
    'B118002 Beef Stroganoff FROZEN USA',
    'B118110 Beef Stew FROZEN USA',
    'B118120 Beef Loin Top Sirloin  Baseball Steaks FROZEN USA ',
    'B200000 Turkey  Whole Heritage <8 lbs FRESH USA',
    'B200001 Turkey  Whole Heritage 8-9.99 lbs FRESH USA',
    'B200002 Turkey  Whole Heritage 10-11.99 lbs FRESH USA',
    'B200003 Turkey  Whole Heritage 12-13.99 lbs FRESH USA',
    'B200004 Turkey  Whole Heritage 14-15.99 lbs FRESH USA',
    'B200005 Turkey  Whole Heritage 16-17.99 lbs FRESH USA',
    'B200006 Turkey  Whole Heritage 18-19.99 lbs FRESH USA',
    'B200007 Turkey  Whole Heritage 20-21.99 lbs FRESH USA',
    'B200008 Turkey  Whole Heritage 22-23.99 lbs FRESH USA',
    'B200009 Turkey  Whole Heritage 24-25.99 lbs FRESH USA',
    'B200010 Turkey  Whole Heritage 26-27.99 lbs FRESH USA',
    'B200011 Turkey  Whole Heritage 28-29.99 lbs FRESH USA',
    'B200012 Turkey  Whole Heritage 30-31.99 lbs FRESH USA',
    'B200013 Turkey  Whole Heritage 32-33.99 lbs FRESH USA',
    'B200014 Turkey  Whole Heritage 34-35.99 lbs FRESH USA',
    'B200100 Turkey Heritage Whole FRESH <10 lbs.',
    'B200101 Turkey Heritage Whole FRESH 10-13.99 lbs',
    'B200102 Turkey Heritage Whole FRESH 14-17.99 lbs',
    'B200103 Turkey Heritage Whole FRESH 18-21.99 lbs',
    'B200104 Turkey Heritage Whole FRESH 22-25.99 lbs',
    'B200105 Turkey Heritage Whole FRESH 26+ lbs.',
    'B200106 Turkey Heritage Whole FRESH Tom',
    'B200110 Turkey Heritage Whole B Grade FRESH',
    'B201001 Turkey  Heritage  Breast  Boneless & Skin-On FRESH USA',
    'B201002 Turkey  Heritage  Breast  Boneless & Skinless FRESH USA',
    'B201003 Turkey  Heritage  Breast  Bone-in & Skin-On FRESH USA',
    'B201004 Turkey  Heritage  Breast  Bone-in & Skin FRESH USA',
    'B201005 Turkey  Heritage  Tender  Clipped & Clean FRESH USA',
    'B201006 Turkey  Heritage  Wing  3-Joint FRESH USA',
    'B201007 Turkey  Heritage  Wing  Drumette FRESH USA',
    'B201008 Turkey  Heritage  Wing  Paddle FRESH USA',
    'B201009 Turkey  Heritage  Wing  Tip FRESH USA',
    'B201010 Turkey  Heritage  Leg FRESH USA',
    'B201011 Turkey  Heritage  Drumstick FRESH USA',
    'B201012 Turkey  Heritage  Thigh  Boneless & Skin-On FRESH USA',
    'B201013 Turkey  Heritage  Thigh  Boneless & Skinless FRESH USA',
    'B201014 Turkey  Heritage  Thigh  Bone-In & Skin-On FRESH USA',
    'B201015 Turkey  Heritage  Thigh  Bone-In & Skinless FRESH USA',
    'B201016 Turkey  Heritage  Trim FRESH USA',
    'B201017 Turkey  Heritage  Thigh Trim FRESH USA',
    'B201018 Turkey  Heritage  Breast Trim FRESH USA',
    'B201019 Turkey  Heritage  Scapula FRESH USA',
    'B201024 Turkey  Heritage  Neck FRESH USA',
    'B201025 Turkey  Heritage  Tail FRESH USA',
    'B201026 Turkey  Heritage  Back FRESH USA',
    'B201028 Turkey  Heritage  Skin FRESH USA',
    'B201029 Turkey  Heritage  Fries FRESH USA',
    'B201032 Turkey Heritage Eggs FRESH USA',
    'B201033 Turkey Heritage Drumstick  BNLS/Skin-on FRESH USA',
    'B210000 Turkey  Whole Heritage <8 lbs FROZEN USA',
    'B210001 Turkey  Whole Heritage 8-9.99 lbs FROZEN USA',
    'B210002 Turkey Whole Heritage 10-11.99lb FROZEN',
    'B210003 Turkey  Whole Heritage 12-13.99 lbs FROZEN USA',
    'B210004 Turkey  Whole Heritage 14-15.99 lbs FROZEN USA',
    'B210005 Turkey  Whole Heritage 16-17.99 lbs FROZEN USA',
    'B210006 Turkey  Whole Heritage 18-19.99 lbs FROZEN USA',
    'B210007 Turkey  Whole Heritage 20-21.99 lbs FROZEN USA',
    'B210008 Turkey  Whole Heritage 22-23.99 lbs FROZEN USA',
    'B210009 Turkey  Whole Heritage 24-25.99 lbs FROZEN USA',
    'B210010 Turkey  Whole Heritage 26-27.99 lbs FROZEN USA',
    'B210011 Turkey  Whole Heritage 28-29.99 lbs FROZEN USA',
    'B210012 Turkey  Whole Heritage 30-31.99 lbs FROZEN USA',
    'B210013 Turkey  Whole Heritage 32-33.99 lbs FROZEN USA',
    'B210014 Turkey  Whole Heritage 34-35.99 lbs FROZEN USA',
    'B210017 Turkey  Whole Heritage B Grade FROZEN USA',
    'B210100 Turkey Heritage Whole FROZEN <10 lbs.',
    'B210101 Turkey Heritage Whole FROZEN 10-13.99 lb',
    'B210102 Turkey Heritage Whole FROZEN 14-17.99 lb',
    'B210103 Turkey Heritage Whole 18-21.99lbs FROZEN',
    'B211001 Turkey  Heritage  Breast  Boneless & Skin-On FROZEN USA',
    'B211002 Turkey  Heritage  Breast  Boneless & Skinless FROZEN USA',
    'B211003 Turkey  Heritage  Breast  Bone-in & Skin-On FROZEN USA',
    'B211004 Turkey  Heritage  Breast  Bone-in & Skin FROZEN USA',
    'B211005 Turkey  Heritage  Tender  Clipped & Clean FROZEN USA',
    'B211006 Turkey  Heritage  Wing  3-Joint FROZEN USA',
    'B211007 Turkey  Heritage  Wing  Drumette FROZEN USA',
    'B211008 Turkey  Heritage  Wing  Paddle FROZEN USA',
    'B211009 Turkey  Heritage  Wing Tip FROZEN USA',
    'B211010 Turkey  Heritage  Leg FROZEN USA',
    'B211011 Turkey  Heritage  Drumstick FROZEN USA',
    'B211012 Turkey  Heritage  Thigh  Boneless & Skin-On FROZEN USA',
    'B211013 Turkey  Heritage  Thigh  Boneless & Skinless FROZEN USA',
    'B211014 Turkey  Heritage  Thigh  Bone-In & Skin-On FROZEN USA',
    'B211015 Turkey  Heritage  Thigh  Bone-In & Skinless FROZEN USA',
    'B211016 Turkey  Heritage  Trim FROZEN USA',
    'B211017 Turkey  Heritage  Thigh Trim FROZEN USA',
    'B211018 Turkey  Heritage  Breast Trim FROZEN USA',
    'B211019 Turkey  Heritage  Scapula FROZEN USA',
    'B211020 Turkey  Heritage  Giblet Packs FROZEN USA',
    'B211021 Turkey  Heritage  Liver FROZEN USA',
    'B211022 Turkey  Heritage  Heart FROZEN USA',
    'B211023 Turkey  Heritage  Gizzard FROZEN USA',
    'B211024 Turkey Heritage Neck FROZEN USA',
    'B211025 Turkey  Heritage  Tail FROZEN USA',
    'B211026 Turkey  Heritage  Back FROZEN USA',
    'B211027 Turkey  Heritage  Cage FROZEN USA',
    'B211028 Turkey  Heritage  Skin FROZEN USA',
    'B211029 Turkey  Heritage  Fries FROZEN USA',
    'B211030 Turkey  Heritage  Feet FROZEN USA',
    'B211031 Turkey Heritage Grind FROZEN USA',
    'B211033 Turkey Heritage Drumstick  BNLS/Skin-On FROZEN USA',
    'B211611 2013 Heritage Drumsticks Grimaud for PF ',
    'B211731 Turkey Heritage Ground Dark FROZEN USA',
    'B211807 Turkey Heritage Wing Drumette CMP 2/pk F',
    'B211808 Turkey Heritage Wing Flat CMP 4/pack FRO',
    'B211810 Turkey Heritage Leg CMP  2 per pack FROZ',
    'B211811 Turkey Heritage Drumsticks CMP 8/pack FR',
    'B211812 Heritage Thighs for Pet Food FROZEN USA',
    'B21190 Turkey Heritage Wing Drumette CMP 19/pk ',
    'B211901 Turkey Heritage Breast bnls  s/o Grimaud',
    'B211906 Turkey Heritage Wing 3J-Grimaud FROZEN U',
    'B211908 Turkey Heritage Wing Flat CMP 24/pack FR',
    'B211910 Turkey Heritage Leg CMP  1 per pack FROZ',
    'B211911 Turkey Heritage Drumsticks CMP 2/pack FR',
    'B211912 Turkey Heritage Thigh Bnls s/o Grimaud F',
    'B211931 Turkey Heritage Thigh Grind FROZEN USA',
    'B220000 Turkey Heritage Poult',
    'B220001 Turkey Heritage Live',
    'B300000 Turkey BB Whole <8 lbs FRESH USA',
    'B300001 Turkey BB Whole 8-9.99lb FRESH USA',
    'B300002 Turkey BB Whole 10-11.99lb FRESH USA',
    'B300003 Turkey BB Whole 12-13.99lb FRESH USA',
    'B300004 Turkey BB Whole 14-15.99lb FRESH USA',
    'B300005 Turkey BB Whole 16-17.99lb FRESH USA',
    'B300006 Turkey BB Whole18-19.99lb FRESH USA',
    'B300007 Turkey BB Whole 20-21.99lb FRESH USA',
    'B300008 Turkey BB Whole 22-23.99lb FRESH USA',
    'B300009 Turkey BB Whole 24-25.99lb FRESH USA',
    'B300010 Turkey BB Whole 26-27.99lb FRESH USA',
    'B300011 Turkey BB Whole 28-29.99lb FRESH USA',
    'B300012 Turkey BB Whole 30-31.99lb FRESH USA',
    'B300013 Turkey BB Whole 32-33.99lb FRESH USA',
    'B300014 Turkey BB Whole 34-35.99lb FRESH USA',
    'B300015 Turkey BB Whole 36-37.99lb FRESH USA',
    'B300016 Turkey BB Whole 38-39.99lb FRESH USA',
    'B300017 Turkey BB Whole B Grade FRESH USA',
    'B300100 Turkey BB Whole FRESH <10 lbs.',
    'B300101 Turkey BB Whole FRESH 10-13.99 lbs',
    'B300102 Turkey BB Whole FRESH 14-17.99 lbs.',
    'B300103 Turkey BB Whole FRESH 18-21.99 lbs.',
    'B300104 Turkey BB Whole FRESH 22-25.99 lbs.',
    'B300105 Turkey BB Whole FRESH 26+ lbs.',
    'B300106 Turkey BB Whole FRESH Tom',
    'B301001 Turkey BB Breast BnlsSkinOn FRESH USA',
    'B301002 Turkey BB Breast BnlsSknls FRESH USA',
    'B301003 Turkey BB Breast BoneInSkinOn FRESH USA',
    'B301004 Turkey BB Breast BoneInSknls FRESH USA',
    'B301005 Turkey BB Tender ClippedClean FRESH USA',
    'B301006 Turkey BB Wing 3-Joint FRESH USA',
    'B301007 Turkey BB Wing Drumette FRESH USA',
    'B301008 Turkey BB Wing Paddle FRESH USA',
    'B301009 Turkey BB Wing Tip FRESH USA',
    'B301010 Turkey BB Leg FRESH USA',
    'B301011 Turkey BB Drumstick FRESH USA',
    'B301012 Turkey BB Thigh BnlsSkinOn FRESH USA',
    'B301013 Turkey BB Thigh BnlsSknls FRESH USA',
    'B301014 Turkey BB Thigh BoneInSkinOn FRESH USA',
    'B301015 Turkey BB Thigh BoneInSknls FRESH USA',
    'B301016 Turkey BB Trim FRESH USA',
    'B301017 Turkey BB Thigh Trim FRESH USA',
    'B301018 Turkey BB Breast Trim FRESH USA',
    'B301019 Turkey BB Scapula FRESH USA',
    'B301024 Turkey BB Neck FRESH USA',
    'B301025 Turkey BB Tail FRESH USA',
    'B301026 Turkey BB Back FRESH USA',
    'B301028 Turkey BB Skin FRESH USA',
    'B301029 Turkey BB Fries FRESH USA',
    'B301032 Turkey BB Wing 2-Joint FRESH USA',
    'B301034 Turkey Broad Breasted MST FRESH USA',
    'B301037 Turkey BB Netted Breast USA FRESH',
    'B310000 Turkey BB Whole <8 lbs FROZEN USA',
    'B310001 Turkey BB Whole 8-9.99lb FROZEN USA',
    'B310002 Turkey BB Whole 10-11.99lb FROZEN USA',
    'B310003 Turkey BB Whole 12-13.99lb FROZEN USA',
    'B310004 Turkey BB Whole 14-15.99lb FROZEN USA',
    'B310005 Turkey BB Whole 16-17.99lb FROZEN USA',
    'B310006 Turkey BB Whole 18-19.99lb FROZEN USA',
    'B310007 Turkey BB Whole 20-21.99lb FROZEN USA',
    'B310008 Turkey BB Whole 22-23.99lb FROZEN USA',
    'B310009 Turkey BB Whole 24-25.99lb FROZEN USA',
    'B310010 Turkey BB Whole 26-27.99lb FROZEN USA',
    'B310011 Turkey BB Whole 28-29.99lb FROZEN USA',
    'B310012 Turkey BB Whole 30-31.99lb FROZEN USA',
    'B310013 Turkey BB Whole 32-33.99lb FROZEN USA',
    'B310014 Turkey BB Whole 34-35.99lb FROZEN USA',
    'B310015 Turkey BB Whole 36-37.99lb FROZEN USA',
    'B310016 Turkey BB Whole 38-39.99lb FROZEN USA',
    'B310017 Turkey BB Whole B Grade FROZEN USA',
    'B310018 Turkey BB Whole for Pet Food FROZEN USA',
    'B310019 Turkey BB Whole Large (BNWOG) FROZEN USA',
    'B310103 Turkey BB Whole 18-21.99 lbs FROZEN USA',
    'B310104 Turkey BB Whole 22-25.99lbs FROZEN USA',
    'B310105 Turkey BB Whole 26+ lbs FROZEN USA',
    'B311001 Turkey BB Breast BnlsSkinOn FROZEN USA',
    'B311002 Turkey BB Breast BnlsSknls FROZEN USA',
    'B311003 Turkey BB Breast BoneinSkinOn FROZEN USA',
    'B311004 Turkey BB Breast BoneInSknls FROZEN USA',
    'B311005 Turkey BB Tender ClippedClean FROZEN USA',
    'B311006 Turkey BB Wing 3-Joint FROZEN USA',
    'B311007 Turkey BB Wing Drumette FROZEN USA',
    'B311008 Turkey BB Wing Paddle FROZEN USA',
    'B311009 Turkey BB Wing Tip FROZEN USA',
    'B311010 Turkey BB Leg FROZEN USA',
    'B311011 Turkey BB Drumstick FROZEN USA',
    'B311012 Turkey BB Thigh BnlsSkinOn',
    'B311013 Turkey BB Thigh BnlsSknls FROZEN USA',
    'B311014 Turkey BB Thigh BoneInSkinOn FROZEN USA',
    'B311015 Turkey BB Thigh BoneInSknls FROZEN USA',
    'B311016 Turkey BB Trim FROZEN USA',
    'B311017 Turkey BB Thigh Trim FROZEN USA',
    'B311018 Turkey BB Breast Trim FROZEN USA',
    'B311019 Turkey BB Scapula FROZEN USA',
    'B311020 Turkey BB Giblet Packs FROZEN USA',
    'B311021 Turkey BB Liver FROZEN USA',
    'B311022 Turkey BB Heart FROZEN USA',
    'B311023 Turkey BB Gizzard FROZEN USA',
    'B311024 Turkey BB Neck FROZEN USA',
    'B311025 Turkey BB Tail FROZEN USA',
    'B311026 Turkey BB Back FROZEN USA',
    'B311027 Turkey BB Cage FROZEN USA',
    'B311028 Turkey BB Skin FROZEN USA',
    'B311029 Turkey BB Fries FROZEN USA',
    'B311030 Turkey BB Feet FROZEN USA',
    'B311031 Turkey BB Grind (5lb Chub) FROZEN USA',
    'B311032 Turkey BB Wing 2-Joint FROZEN USA',
    'B311033 Turkey BB Frame FROZEN USA',
    'B311034 Turkey Broad Breasted MST FROZEN USA',
    'B311035 Turkey BB Ground Dark (0108) FROZEN USA',
    'B311036 Turkey Broad Breasted 6 oz Patty FROZEN ',
    'B311037 Turkey BB Breast Netted USA FROZEN',
    'B311038 Turkey BB TOM Netted Breast FROZEN USA',
    'B311039 Turkey BB Patty 4oz FROZEN USA',
    'B311040 Turkey BB ABF BIB <12 A-GR FROZEN USA',
    'B311041 Turkey BB ABF BIB 12-14 A-GR FROZEN USA',
    'B311042 Turkey BB ABF BIB 14-16 A-GR FROZEN USA',
    'B311043 Turkey BB ABF BIB 16-18 A-GR FROZEN USA',
    'B311044 Turkey BB ABF BIB 18-20 A-GR FROZEN USA',
    'B311045 Turkey BB ABF BIB >20 A-GR FROZEN USA',
    'B311046 Turkey BB ABF BIB 16-184 B-GR FROZEN USA',
    'B311047 Turkey BB ABF BIB 18-20 B-GR FROZEN USA',
    'B311048 Turkey BB ABF BIB >20 B-GR FROZEN USA',
    'B311049 Turkey BB ABF Back FROZEN USA',
    'B311050 Turkey BB ABF Drumstick FROZEN USA',
    'B311051 Turkey BB ABF Neck FROZEN USA',
    'B311052 Turkey BB ABF Thigh BnlsSkinOn FROZEN US',
    'B311053 Turkey BB ABF Tail FROZEN USA',
    'B311054 Turkey BB ABF Tom Wing 2Joint FROZEN USA',
    'B311055 Turkey BB ABF Gizzard FROZEN USA',
    'B311056 Turkey BB ABF Heart FROZEN USA',
    'B311057 Turkey BB ABF Liver FROZEN USA',
    'B311101 Turkey BB TOM Breast BL SO FROZEN USA',
    'B311107 Turkey BB TOM Wing Drumette FROZEN USA',
    'B311108 Turkey BB ABF Tom Wing D/E FROZEN USA',
    'B311711 Turkey BB Drumsticks 2/pkg FROZEN',
    'B311831 Turkey BB Ground 50/50 (4893) FROZEN USA',
    'B311907 Turkey BB Drumette 2pk FROZEN USA',
    'B320000 Turkey BB Poult',
    'B320001 Turkey BB Hen',
    'B320002 Turkey Broad Breasted Tom Live',
    'B400000 Lamb Whole Carcass FRESH USA',
    'B400001 Lamb Boxed Carcass FRESH USA',
    'B401001 Lamb Shoulder  Square Cut FRESH USA',
    'B401002 Lamb Shoulder  Boneless FRESH USA',
    'B401003 Lamb Foreshank FRESH USA',
    'B401906 Lamb Shoulder Boneless Half FRESH USA',
    'B402003 Lamb Rack  Cap Off Chined FRESH USA',
    'B402005 Lamb Rack  Cap On Chop Ready Chined FRESH USA',
    'B403002 Lamb Denver Ribs FRESH USA',
    'B403003 Lamb Belly, Boneless FRESH USA',
    'B404001 Lamb Loin Chop Ready 1x1 FRESH USA',
    'B404002 Lamb Loin Boneless 1x1 FRESH USA',
    'B404003 Lamb Tenderloin FRESH USA',
    'B404005 Lamb Double Loin, 1" FRESH USA',
    'B404006 Lamb Drop Loin FRESH USA',
    'B404904 Lamb Loin Chop FRESH USA',
    'B405001 Lamb Leg  Trotter-Off FRESH USA',
    'B405005 Lamb Leg  Short Cut Boneless Shank Off FRESH USA',
    'B405006 Lamb Leg  Hindshank FRESH USA',
    'B405007 Lamb Leg Sirloin Boneless 1/pk FRESH USA',
    'B405008 Lamb Leg  Sirloin Boneless FRESH USA',
    'B405009 Lamb Leg Semi-Boneless ShankOn FRESH USA',
    'B406001 Lamb Neck FRESH USA',
    'B406002 Lamb Trim 80 FRESH USA',
    'B406003 Lamb Trim Fat FRESH USA',
    'B406004 Lamb Trim 50 FRESH USA',
    'B406005 Lamb Sample FRESH USA',
    'B406006 Lamb Stew Meat FRESH USA',
    'B410000 Lamb Whole Carcass FROZEN USA',
    'B411001 Lamb Shoulder  Square Cut FROZEN USA',
    'B411002 Lamb Shoulder  Boneless FROZEN USA',
    'B411003 Lamb Foreshank FROZEN USA',
    'B411006 Lamb Shoulder  Boneless Roast Netted FROZEN USA',
    'B411903 Lamb Foreshank Retail FROZEN USA',
    'B411906 Lamb Shoulder Boneless Halves FROZEN USA',
    'B412001 Lamb Rack  Cap On Chined FROZEN USA',
    'B412003 Lamb Rack  Cap Off Chined FROZEN USA',
    'B412005 Lamb Rack  Cap On Chop Ready Chined FROZEN USA',
    'B413002 Lamb Denver Ribs FROZEN USA',
    'B414001 Lamb Loin Chop Ready 1x1 FROZEN USA',
    'B414002 Lamb Loin Boneless 1x1 FROZEN USA',
    'B414003 Lamb Tenderloin FROZEN USA',
    'B414004 Lamb Loin Chop FROZEN USA',
    'B414005 Lamb Double Loin, 1" FROZEN USA',
    'B414006 Lamb Drop Loin FROZEN USA',
    'B414904 Lamb Loin Chop Retail FROZEN USA',
    'B415001 Lamb Leg  Trotter-Off FROZEN USA',
    'B415002 Lamb Leg  Short Cut  Semi-Boneless  Shank On FROZEN USA',
    'B415003 Lamb Leg  Short Cut  Semi-Boneless  Shank Off FROZEN USA',
    'B415004 Lamb Leg  Short Cut  Boneless  Shank On FROZEN USA',
    'B415005 Lamb Leg  Short Cut  Boneless  Shank Off FROZEN USA',
    'B415006 Lamb Leg  Hindshank FROZEN USA',
    'B415007 Lamb Leg Sirloin Boneless 1pk FROZEN USA',
    'B415008 Lamb Leg  Sirloin  Boneless FROZEN USA',
    'B415009 Lamb Leg  Semi-Boneless  Shank On FROZEN USA',
    'B415908 Lamb Sirloin Boneless Retail Frozen USA',
    'B415909 Lamb Leg Bnls Roast Retail FROZEN USA',
    'B416001 Lamb Neck FROZEN USA',
    'B416002 Lamb Trim  80 FROZEN USA',
    'B416003 Lamb Trim  Fat FROZEN USA',
    'B416004 Lamb Trim 50 FROZEN USA',
    'B416005 Lamb Sample FROZEN USA',
    'B416006 Lamb Stew Meat FROZEN USA',
    'B416029 Lamb Patties 3/1 FROZEN USA',
    'B417002 Lamb Ground 5 lb Chub FROZEN USA',
    'B417901 Lamb Ground Retail FROZEN USA',
    'B418001 Lamb Offal FROZEN USA',
    'B418002 Lamb Hearts FROZEN USA',
    'B418003 Lamb Liver FROZEN USA',
    'B418004 Lamb Tongue FROZEN USA',
    'B418005 Lamb Cheeks FROZEN USA',
    'B418008 Lamb Bones FROZEN USA',
    'B418009 Lamb Bones  Trotter (Seder) FROZEN USA',
    'B418010 Lamb Kidneys FROZEN USA',
    'B418011 Lamb Sweetbreads FROZEN USA',
    'B900000 In Store Marketing Material',
    'B900002 Combo Shipping Container',
    'B900003 Heritage Turkey Take Ones',
    'B900004 Gel Packs',
    'B900007 Good Eggs Weekly Reconciliation',
    'B900008 Credit Card (Square) Transaction Fee',
    'B900010 Large Foam Shipping Container (27x17x13)',
    'B900012 Small Foam Shipping Container (9x9x9)',
    'B900013 Medium Foam Shipping Container(15x12x12)',
    'B900015 Broad Breasted Take Ones',
    'B900016 Beef Take Ones',
    'B900017 Lamb Take Ones',
    'B900100 Freight',
    'B900103 Defending Beef',
    'B900201 Avahop feed ingredient',
    'B900301 Roll of Small Labels',
    'B900302 Roll of Medium Labels',
    'B900303 Roll of Large Labels',
    'C101001 Beef Whole Boneless Chuck FRESH CAN',
    'C101002 Beef Shoulder Clod FRESH CAN',
    'C101003 Beef Flat Iron Steak FRESH CAN',
    'C101006 Beef Chuck Tender FRESH CAN',
    'C101007 Beef Shoulder Tender FRESH CAN',
    'C102001 Beef Brisket Point Deckle On FRESH CAN',
    'C102002 Beef Plate (Navel) (9Squared) FRESH CAN',
    'C102003 Beef Outside Skirt Peeled FRESH CAN',
    'C102004 Beef Inside Skirt FRESH CAN',
    'C102006 Beef Flank Steak FRESH CAN',
    'C102007 Beef Bavette (Flap Meat) FRESH CAN',
    'C102008 Beef Foreshank Bnls FRESH CAN',
    'C102009 Beef Plate (Navel) Brined CAN',
    'C102010 Beef Brisket Point Deckle On BRINED CAN',
    'C102011 Beef Hindshank Bnls FRESH CAN',
    'C103002 Beef Rib Export Style FRESH CAN',
    'C103003 Beef Short Ribs Cut 2" FRESH CAN',
    'C103004 Beef Short Ribs Korean-Style FRESH CAN',
    'C103005 Beef Ribeye Lip-On FRESH CAN',
    'C103006 Beef Back Ribs FRESH CAN',
    'C103007 Beef Short Rib Plate FRESH CAN',
    'C104001 Beef Tenderloin PSMO FRESH CAN',
    'C104002 Beef NY Striploin Boneless 0x1 FRESH CAN',
    'C104003 Beef Short Loin FRESH CAN',
    'C104004 Beef Tenderloin Butt (Head) FRESH CAN',
    'C104005 Beef Top Sirloin Butt FRESH CAN',
    'C104006 Beef Tri Tip Roast FRESH CAN',
    'C104007 Beef Hanging Tender FRESH CAN',
    'C104012 Beef NY Striploin Bone In FRESH CAN',
    'C105001 Beef Top Round (Inside) FRESH CAN',
    'C105005 Beef Eye of Round FRESH CAN',
    'C105006 Beef Bottom Round (Flat) FRESH CAN',
    'C105007 Beef Bottom Round Heel FRESH CAN',
    'C105008 Beef Bottom Round (Gooseneck) FRESH CAN',
    'C105009 Beef Sirloin Tip (Knuckle) FRESH CAN',
    'C105010 Beef Hindshank Center Cut FRESH CAN',
    'C105011 Beef Bubble Meat FRESH CAN',
    'C111003 Beef Flat Iron Steak Denuded FROZEN CAN',
    'C111006 Beef Chuck Tender FROZEN CAN',
    'C111007 Beef Shoulder Tender FROZEN CAN',
    'C112001 Beef Brisket Point Deckle On FROZEN CAN',
    'C112002 Beef Plate (Navel) FROZEN CAN',
    'C112003 Beef Outside Skirt Peeled FROZEN CAN',
    'C112004 Beef Inside Skirt FROZEN CAN',
    'C112005 Beef Full Plate Boneless FROZEN CAN',
    'C112006 Beef Flank Steak FROZEN CAN',
    'C112007 Beef Flap Steak (Bavette) FROZEN CAN',
    'C112008 Beef Shank Foreshank Cut 2" FROZEN CAN',
    'C112009 Beef Plate (Navel) Brined FROZEN CAN',
    'C112011 Beef Full Plate Bone In FROZEN CAN',
    'C112108 Beef Foreshank Bnls FROZEN CAN',
    'C112111 Beef Hindshank Bnls FROZEN CAN',
    'C113001 Beef Rib Primal FROZEN CAN',
    'C113002 Beef Rib Export Style FROZEN CAN',
    'C113003 Beef Short Ribs Cut 2" FROZEN CAN',
    'C113004 Beef Short Ribs Korean-Style FROZEN CAN',
    'C113005 Beef Ribeye FROZEN CAN',
    'C113006 Beef Back Ribs FROZEN CAN',
    'C113007 Beef Short Rib Plate FROZEN CAN',
    'C114001 Beef Tenderloin PSMO FROZEN CAN',
    'C114002 Beef NY Strip Boneless 0x1 FROZEN CAN',
    'C114003 Beef Short Loin FROZEN CAN',
    'C114004 Beef Tenderloin Butt (Head) FROZEN CAN',
    'C114005 Beef Top Sirloin Butt FROZEN CAN',
    'C114006 Beef Tri Tip Roast FROZEN CAN',
    'C114007 Beef Hanging Tender FROZEN CAN',
    'C114915 Beef NY Strip Steak 2per FROZEN CAN',
    'C115001 Beef Top Round (Inside) FROZEN CAN',
    'C115005 Beef Eye of Round FROZEN CAN',
    'C115006 Beef Bottom Round (Flat) FROZEN CAN',
    'C115007 Beef Bottom Round Heel FROZEN CAN',
    'C115008 Beef Bottom Round (Gooseneck) FROZEN CAN',
    'C115009 Beef Sirloin Tip (Knuckle) FROZEN CAN',
    'C115010 Beef Hindshank Center Cut FROZEN CAN',
    'C115011 Beef Bubble Meat FROZEN CAN',
    'C116001 Beef Cheeks FROZEN CAN',
    'C116002 Beef Oxtail FROZEN CAN',
    'C116003 Beef Spleen FROZEN CAN',
    'C116004 Beef Tongue FROZEN CAN',
    'C116005 Beef Kidney FROZEN CAN',
    'C116006 Beef Liver FROZEN CAN',
    'C116007 Beef Whole Heart FROZEN CAN',
    'C116008 Beef Kidney Fat FROZEN CAN',
    'C116010 Beef Bones Marrow Cut 2" FROZEN CAN',
    'C116011 Beef Bones Marrow Split FROZEN CAN',
    'C116013 Beef Bones Regular FROZEN CAN',
    'C116014 Beef Bones Gelatinous FROZEN CAN',
    'C116015 Beef Bones Meaty Neck FROZEN CAN',
    'C116016 Beef Feet FROZEN CAN',
    'C116025 Beef Trim 85% FROZEN CAN',
    'C116026 Beef Femur Bones FROZEN CAN',
    'C116027 Beef Whole Leg Bones FROZEN CAN',
    'C116028 Beef Trim 50% FROZEN CAN',
    'C116029 Beef Hamburger Patties 3/1 FROZEN CAN',
    'C116030 Beef Hamburger Patties 4/1 Frozen CAN',
    'C116817 Beef Ground 5 lb Chub FROZEN CAN',
    'C118001 Beef Fajita Bulk FROZEN CAN',
    'C118002 Beef Stroganoff FROZEN CAN',
    'C118003 Beef Stir Fry Bulk FROZEN CAN',
    'C118110 Beef Stew FROZEN CAN',
    'H107002 Beef Hot Dogs 5/1 Bulk Natural Casing',
    'H107003 Beef Hot Dogs 8/1 Bulk Skinless',
    'H107004 Beef Hot Dogs 6/1 Bulk Skinless',
    'H107005 Beef Hot Dogs Rework',
    'H107006 Beef Hot Dogs 5/1 Retail Natural Casing',
    'H107802 Beef Hot Dogs 5/1 Bulk Natural Casing',
    'H117002 Beef Hot Dogs 5/1 Bulk Natural Casing FZ',
    'H117003 Beef Hot Dogs 8/1 Bulk Skinless FROZEN',
    'H117004 Beef Hot Dogs 6/1 Bulk Skinless FROZEN',
    'H117005 Beef Hot Dogs Rework FROZEN',
    'H117006 Beef Hot Dogs 5/1 Retail Natural Case FZ',
    'H117007 Beef Hot Dogs 4/1 Bulk Skinless FROZEN',
    'H117022 Beef Hot Dogs 5/1 Bulk Skinless FROZEN',
    'H117802 Beef Hot Dogs 5/1 Bulk Natural Casing FZ',
    'H117803 Beef Hot Dogs 8/1 0.5lb Pack Skinless FZ',
    'P106019 Beef Trim 65% (Greenlea) Frozen NZ',
    'P115005 Beef Eye of Round Brokered FROZEN NZ',
    'Z101000 Beef Sample FRESH NZ',
    'Z101001 Beef Whole Boneless Chuck FRESH NZ',
    'Z101002 Beef Shoulder Clod FRESH NZ',
    'Z101003 Beef Flat Iron Steak Denuded FRESH NZ',
    'Z101005 Beef Oyster Blade FRESH NZ',
    'Z102001 Beef Brisket Point, Deckle On FRESH NZ',
    'Z102002 Beef Plate (Navel) FRESH NZ',
    'Z102003 Beef Outside Skirt Peeled FRESH NZ',
    'Z102004 Beef Inside Skirt FRESH NZ',
    'Z102006 Beef Flank Steak FRESH NZ',
    'Z102007 Beef Flap Steak (Bavette) FRESH NZ',
    'Z102008 Beef Foreshank Cut 2" FRESH NZ',
    'Z102009 Beef Plate (Navel) Brined FRESH NZ',
    'Z102010 Beef Brisket Point, Deckle On BRINED NZ',
    'Z103002 Beef Rib Export Style FRESH NZ',
    'Z103003 Beef Short Ribs Cut 2" FRESH NZ',
    'Z103004 Beef Short Ribs Korean-Style FRESH NZ',
    'Z103005 Beef Ribeye Lip-On FRESH NZ',
    'Z104001 Beef Tenderloin PSMO FRESH NZ',
    'Z104002 Beef NY Strip Boneless 1x1 FRESH NZ',
    'Z104003 Beef Short Loin FRESH NZ',
    'Z104004 Beef Tenderloin Butt (Head) FRESH NZ',
    'Z104005 Beef Top Sirloin Butt FRESH NZ',
    'Z104006 Beef Tri Tip Roast FRESH NZ',
    'Z104007 Beef Hanging Tender FRESH NZ',
    'Z105001 Beef Top Round (Inside) FRESH NZ',
    'Z105002 Beef Top Round (Inside) Peeled FRESH NZ',
    'Z105003 Beef Top Round (Inside) Cap Off FRESH NZ',
    'Z105004 Beef Top Round Split Roll&Tie FRESH NZ',
    'Z105005 Beef Eye of Round FRESH NZ',
    'Z105006 Beef Bottom Round (Flat) FRESH NZ',
    'Z105007 Beef Bottom Round Heel FRESH NZ',
    'Z105008 Beef Bottom Round (Gooseneck) FRESH NZ',
    'Z105009 Beef Sirloin Tip (Knuckle) FRESH NZ',
    'Z105010 Beef Hindshank  2" Center Cut FRESH NZ',
    'Z105011 Beef Round Flat Bottom BRINED NZ',
    'Z105012 Beef Eye of Round BRINED NZ',
    'Z105013 Beef Sirloin Tip Knuckle Peeled FRESH NZ',
    'Z106019 Beef Trim  65% FRESH NEW ZEALAND',
    'Z106020 Beef Trim  95% FRESH NEW ZEALAND',
    'Z106021 Beef Trim  75% FRESH NEW ZEALAND',
    'Z106024 Beef Trim Fat FRESH NEW ZEALAND',
    'Z11100 Beef Sample NZ Frozen',
    'Z111001 Beef Whole Boneless Chuck FROZEN NZ',
    'Z111002 Beef Shoulder Clod FROZEN NZ',
    'Z111003 Beef Flat Iron Steak Denuded FROZEN NZ',
    'Z111005 Beef Oyster Blade FROZEN NZ',
    'Z111006 Beef Chuck Tender FROZEN NZ',
    'Z112001 Beef Brisket Point, Deckle On FROZEN NZ',
    'Z112002 Beef Plate (Navel) FROZEN NZ',
    'Z112003 Beef Outside Skirt Peeled FROZEN NZ',
    'Z112004 Beef Inside Skirt FROZEN NZ',
    'Z112006 Beef Flank Steak FROZEN NZ',
    'Z112007 Beef Flap Steak (Bavette) FROZEN NZ',
    'Z112008 Beef Foreshank Cut 2" FROZEN NZ',
    'Z112009 Beef Plate (Navel) BRINED FROZEN NZ',
    'Z112010 Beef Brisket Point On BRINED FROZEN NZ',
    'Z112011 Beef Full Plate Bone In FROZEN NZ',
    'Z113001 Beef Rib Primal FROZEN NZ',
    'Z113002 Beef Rib Export Style FROZEN NZ',
    'Z113003 Beef Rib Short Ribs Cut 2" FROZEN NZ',
    'Z113004 Beef Short Ribs Korean-Style FROZEN NZ',
    'Z113005 Beef Ribeye FROZEN NZ',
    'Z113006 Beef Back Ribs FROZEN NZ',
    'Z113007 Beef Short Rib Plate FROZEN NZ',
    'Z114001 Beef Tenderloin PSMO FROZEN NZ',
    'Z114002 Beef NY Strip Boneless 1x1 FROZEN NZ',
    'Z114003 Beef Short Loin FROZEN NZ',
    'Z114004 Beef Tenderloin Butt (Head) FROZEN NZ',
    'Z114005 Beef Top Sirloin Butt FROZEN NZ',
    'Z114006 Beef Tri Tip Roast FROZEN NZ',
    'Z114007 Beef Hanging Tender FROZEN NZ',
    'Z115001 Beef Top Round (Inside) FROZEN NZ',
    'Z115002 Beef Top Round (Inside) Peeled FROZEN NZ',
    'Z115003 Beef Top Round (Inside) CapOff FROZEN NZ',
    'Z115004 Beef Top Round Split Roll&Tie FROZEN NZ',
    'Z115005 Beef Eye of Round FROZEN NZ',
    'Z115006 Beef Bottom Round (Flat) FROZEN NZ',
    'Z115007 Beef Bottom Round Heel FROZEN NZ',
    'Z115008 Beef Bottom Round (Gooseneck) FROZEN NZ',
    'Z115009 Beef Sirloin Tip (Knuckle) FROZEN NZ',
    'Z115010 Beef Hindshank 2" Center Cut FROZEN NZ',
    'Z116001 Beef Cheeks FROZEN NZ',
    'Z116002 Beef Oxtail FROZEN NZ',
    'Z116003 Beef Spleen FROZEN NZ',
    'Z116004 Beef Tongue FROZEN NZ',
    'Z116005 Beef Kidney FROZEN NZ',
    'Z116006 Beef Liver FROZEN NZ',
    'Z116007 Beef Whole Heart FROZEN NZ',
    'Z116008 Beef Kidney Fat FROZEN NZ',
    'Z116009 Beef Cod Fat FROZEN NZ',
    'Z116010 Beef Bones Marrow Cut 2" FROZEN NZ',
    'Z116011 Beef Bones Marrow Split FROZEN NZ',
    'Z116012 Beef Bones Marrow Short Split FROZEN NZ',
    'Z116013 Beef Bones Regular FROZEN NZ',
    'Z116014 Beef Bones Gelatinous FROZEN NZ',
    'Z116015 Beef Bones Meaty Neck FROZEN NZ',
    'Z116016 Beef Feet FROZEN NZ',
    'Z116017 Beef Ground -LEAN- 50lb cs FROZEN NZ',
    'Z116019 Beef Trim  65% FROZEN NZ',
    'Z116020 Beef Boneless Shank FROZEN NZ',
    'Z116021 Beef Trim 75% FROZEN NZ',
    'Z116022 Beef Trim Not Tested FROZEN NZ',
    'Z116024 Beef Trim Fat FROZEN NZ',
    'Z116025 Beef Bones Humerus Tibia etc. FROZEN NZ',
    'Z116817 Beef Ground 5 lb Chub FROZEN NZ',
    'Z118001 Beef Fajita FROZEN NZ',
    'Z118002 Beef Stroganoff FROZEN NZ',
    'Z118003 Beef Stir Fry Bulk FROZEN NZ',
    'Z118110 Beef Stew FROZEN NZ',
    'Z400000 Lamb Whole Carcass FRESH NZ',
    'Z406001 Lamb Neck FROZEN NZ',
  ]
  
  $( "#search" ).autocomplete({
    source: itemNames
  });

});