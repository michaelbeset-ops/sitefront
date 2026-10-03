# Bereidt eigen foto's voor: kiezen, bijsnijden, kentekens/huisnummers vervagen, verkleinen.
from PIL import Image, ImageFilter
import os
B='bron/foto/'; A='src/assets/'
def save(img, name, maxw=2000, q=84):
    img=img.convert('RGB')
    if img.width>maxw: img=img.resize((maxw, round(img.height*maxw/img.width)), Image.LANCZOS)
    img.save(A+name, quality=q, optimize=True, progressive=True)
def blur(img, boxes, r=14):
    for bx in boxes:
        reg=img.crop(bx).filter(ImageFilter.GaussianBlur(r)); img.paste(reg, bx)
    return img
def unbar(img):
    # zwarte balken (letterbox) wegsnijden
    g=img.convert('L'); w,h=g.size; px=g.load()
    rows=[y for y in range(h) if sum(px[x,y] for x in range(0,w,8))/(w/8)>18]
    return img.crop((0,rows[0],w,rows[-1]+1))
O=lambda f: Image.open(B+f)
P1='Project1__IMG-20210809-WA00'; P2='Project_2__IMG-20210'; P3='Project_3__'; P4='Project_4__'
save(O('fb8.jpg'),'hero.jpg')
save(O('fb9.jpg'),'bus.jpg')
save(O('fb1.jpg'),'ontwerp.jpg',1400)
save(O('fb3.jpg'),'aanleg.jpg',1400)
save(O('IMG-20201110-WA0009.jpg'),'beplanting.jpg',1400)
save(O('Vormsnoei_conifeer.jpg'),'onderhoud.jpg',1400)
for f,n in [('fb2.jpg','w-tuinhuis.jpg'),('fb4.jpg','w-border.jpg'),('fb6.jpg','w-overkapping.jpg'),('fb7.jpg','w-schommel.jpg'),('fb5.jpg','w-start.jpg')]:
    save(O(f),n,1200)
# Patrick bij de Roparun-wagen: alleen hijzelf
p=O('20220606_095637.jpg'); save(p.crop((935,40,1325,1100)),'patrick.jpg',900)
# Projecten (volgorde en onderschriften zoals in hun fotoalbum)
proj={
 'p1':[P1+'14.jpg',P1+'22.jpg',P1+'16.jpg',P1+'21.jpg',P1+'23.jpg',P1+'18.jpg',P1+'15.jpg',P1+'31.jpg',P1+'28.jpg',P1+'17.jpg',P1+'27.jpg',P1+'30.jpg',P1+'24.jpg',P1+'29.jpg',P1+'32.jpg'],
 'p2':[P2+'809-WA0042.jpg',P2+'809-WA0048.jpg',P2+'809-WA0047.jpg',P2+'324-WA0004.jpg',P2+'324-WA0003.jpg',P2+'324-WA0000.jpg',P2+'809-WA0046.jpg',P2+'809-WA0044.jpg',P2+'809-WA0045.jpg'],
 'p3':[P3+'196125899_259537475963262_7915146174931101754_n.jpg',P3+'196444342_259537482629928_1138409436993494961_n.jpg',P3+'196505518_259537632629913_395606457840745823_n.jpg',P3+'196581045_259537589296584_5435395889328794127_n.jpg',P3+'196519404_259537599296583_7077985144803130738_n.jpg',P3+'197019466_259537622629914_2262976102880999154_n.jpg',P3+'197494126_259537529296590_6146987642221388443_n.jpg',P3+'196059816_259537535963256_13007057843904383_n.jpg'],
 'p4':[P4+'248093685_355860382997637_7035670579725469823_n.jpg',P4+'241349561_355860349664307_2260184027183351883_n.jpg',P4+'248595933_355860269664315_3052942241177844070_n.jpg',P4+'248337646_355860429664299_3274587977360978487_n.jpg',P4+'248293141_355860299664312_6883594001495024178_n.jpg',P4+'248253302_355860172997658_3215853400530575547_n.jpg'],
}
vervaag={P2+'324-WA0000.jpg':[(880,58,962,114)],P2+'809-WA0046.jpg':[(600,100,700,160)],P2+'809-WA0042.jpg':[(1405,155,1495,220),(1080,185,1150,232)]}
os.makedirs(A+'proj',exist_ok=True)
for k,fs in proj.items():
    for i,f in enumerate(fs):
        im=O(f).convert('RGB')
        if f in vervaag: im=blur(im,vervaag[f])
        if k=='p4' and i==0: im=unbar(im)
        save(im,f'proj/{k}-{i+1:02d}.jpg',1200,80)
# Beeldmerk uit hun logo (groen op zwart -> groen op transparant)
lg=O('fb10.png').convert('RGB').crop((200,340,700,842))
a=Image.new('L',lg.size); px=lg.load(); ap=a.load()
for y in range(lg.height):
    for x in range(lg.width):
        r,g,b=px[x,y]; ap[x,y]=max(0,min(255,int((g-r)*2.2)))
mark=Image.new('RGBA',lg.size,(44,158,47,0)); mark.putalpha(a); mark=mark.resize((160,160),Image.LANCZOS); mark.save('public/merk.png')
mark.resize((64,64),Image.LANCZOS).save('public/favicon.png')
print('ok')
# Patrick: sponsortekst links/rechts naast hem vervagen
p2=Image.open(A+'patrick.jpg'); p2=blur(p2,[(0,0,80,330),(0,0,128,240),(0,600,60,860),(320,420,390,640)],10); p2.save(A+'patrick.jpg',quality=86)
