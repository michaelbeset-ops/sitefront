from PIL import Image, ImageFilter
I='bron/web/img/'; O='src/assets/'
jobs = {
 'hero-d.jpg': ('arm-arm-transport-koerier-slider-2.jpg', []),
 'hero-m.jpg': ('tbr-koeriersdiensten-rotterdam.jpeg', [(820,1145,998,1240)]),
 'duo.jpg': ('arm-arm-transport-koerier-slider-3.jpg', [(290,838,436,888),(1092,760,1203,810)]),
 'hal.jpg': ('pf-001.jpeg', []),
 'actros.jpg': ('pf-008.jpeg', [(188,532,272,568)]),
 'actros-zij.jpg': ('pf-004.jpeg', [(438,534,524,576)]),
 'bus.jpg': ('tbr-transport-koerier-rotterdam.jpeg', [(15,855,135,985)]),
}
for out,(src,boxes) in jobs.items():
    im = Image.open(I+src).convert('RGB')
    for b in boxes:
        reg = im.crop(b).filter(ImageFilter.GaussianBlur(14)).filter(ImageFilter.GaussianBlur(14))
        im.paste(reg, b[:2])
    im.save(O+out, quality=88)
    print(out, im.size)
