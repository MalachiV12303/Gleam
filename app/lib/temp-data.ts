const cameras = [
    {
        id: '69123919',
        name: 'EOS Rebel T7',
        type: 'DSLR',
        brand: 'Canon',
        value: 599.99,
        details: JSON.parse('{"megapixels": 24.1, "res": 1080, "shutter" : "1/4000 to 30 sec", "sd" : ["SD","SDXC","SDHC"], "lens" : ["Canon EF","Canon EF-S"]}'),
        description: 'Take stunning pictures with vibrant colors using this EOS Rebel T7 camera. The built-in Wi-Fi makes printing and sharing pictures quick and easy, and the auto-focus system creates crisp images at a moments notice. This EOS Rebel T7 camera takes Full HD video, allowing experiences to be captured with quality',
    },
    {
        id: '75860420',
        name: 'Z30',
        type: 'Mirrorless',
        brand: 'Nikon',
        value: 699.99,
        details: JSON.parse('{"megapixels": 20.9, "res": 2160, "shutter" : "1/4000 to 30 sec", "sd" : ["SD","SDXC","SDHC"], "lens" : ["Nikon Z"] }'),
        description: 'Packed with the options that creators, vloggers and streamers want, the Z30 sports a flip-out touchscreen to keep you in front of the camera. Featuring 4K video that will help you stand out, fast, reliable autofocus, crystal clear audio, creative in-camera filters and convenient controls—all in a compact, lightweight package that will inspire your best work yet',
    },
    {
        id: '53705378',
        name: 'Z50',
        type: 'Mirrorless',
        brand: 'Nikon',
        value: 899.99,
        details: JSON.parse('{"megapixels": 20.9, "res": 2160, "shutter" : "1/4000 to 30 sec", "sd" : ["SD","SDXC","SDHC"], "lens" : ["Nikon Z"] }'),
        description: 'Keep track of your most precious moments with this Nikon DX-format mirrorless camera kit. The weather sealing and durable construction provide protection and long-lasting service, while the built-in Wi-Fi and Bluetooth allow you to share pictures and videos. This digital Nikon DX-format mirrorless camera kit features a NIKKOR DZ 16-50mm f/3.5-6.3 lens to focus in on a range of subjects',
    },
    {
        id: '88092734',
        name: 'D7500',
        type: 'DSLR',
        brand: 'Nikon',
        value: 999.99,
        details: JSON.parse('{"megapixels": 20.9, "res": 2160, "shutter" : "1/8000 to 30 sec", "sd" : ["SD","SDXC","SDHC"], "lens" : ["Nikon DX"] }'),
        description: 'Shoot photos every day with this Nikon D7500 digital camera. A large 20.9-megapixel sensor and EXPEED 5 processing ensure it handles everyday photography with ease, and the wide ISO range lets you take photos in a variety of lighting scenarios. The rapid 8 fps shutter speed helps ensure you get the perfect shot with this Nikon D7500 digital camera',
    },
    {
        id: '90748551',
        name: 'EOS 5D Mark IV',
        type: 'DSLR',
        brand: 'Canon',
        value: 2299.99,
        details: JSON.parse('{"megapixels": 20.9, "res": 2160, "shutter" : "1/8000 to 30 sec", "sd" : ["SD","SDXC","SDHC"], "lens" : ["Nikon DX"] }'),
        description: 'Shoot photos every day with this Nikon D7500 digital camera. A large 20.9-megapixel sensor and EXPEED 5 processing ensure it handles everyday photography with ease, and the wide ISO range lets you take photos in a variety of lighting scenarios. The rapid 8 fps shutter speed helps ensure you get the perfect shot with this Nikon D7500 digital camera',
    },
    {
        id: '74443892',
        name: 'Alpha 6100',
        type: 'Mirrorless',
        brand: 'Sony',
        value: 849.99,
        details: JSON.parse('{"megapixels": 24.2, "res": 2160, "shutter" : "Still images:1/4000 to 30 sec, Bulb, Movies: 1/4000 to 1/4 (1/3 steps), up to 1/60 in AUTO mode (up to 1/30 in Auto slow shutter mode)", "sd" : ["SD","SDXC","SDHC","microSD","microSDHC","microSDXC","Memory Stick Micro","Memory Stick PRO Duo","Memory Stick PRO-HG Duo"], "lens" : ["Sony E-Mount"] }'),
        description: 'Take eye-catching photos with this Sony Alpha 6100 mirrorless digital camera with 16-50mm lens. The BIONZ X image processor coupled with the 24.2MP CMOS sensor ensures images of the highest quality. The 16-50mm lens offers a 24-75mm equivalent focal length range, making this Sony Alpha 6100 mirrorless digital camera ideal for portraits and even nighttime photography',
    },
    {
        id: '27331996',
        name: 'LUMIX S9',
        type: 'Mirrorless',
        brand: 'Panasonic',
        value: 1799.99,
        details: JSON.parse('{"megapixels": 24.2, "res": 6144, "shutter" : "(Max. 60 minutes), 1/8,000 - 60", "sd" : ["SD","SDXC","SDHC"], "lens" : ["Leica L-Mount"] }'),
        description: 'Discover the LUMIX S9, the ultimate tool for content creators looking to stand out in the world of social media. This compact full frame mirrorless camera offers superior image quality, easy-to-use functions, and a sleek colorful design. With the LUMIX S9 digital camera, you can create exceptional content like a pro',
    },
  ];


  const lenses = [
    {
        id: '69123919',
        name: 'RF70-200mm F2.8L IS USM Telephoto Zoom Lens',
        type: 'Telephoto Zoom',
        brand: 'Canon',
        value: 2099.99,
        details: JSON.parse('{"minfl": 70, "maxfl": 200, "maxap" : "f/2.8", "mount" : ["Canon EF"]}'),
    },
    {
        id: '75860420',
        name: 'AF-S NIKKOR 50mm f/1.8G Standard Lens',
        type: 'Standard Prime',
        brand: 'Nikon',
        value: 199.99,
        details: JSON.parse('{"minfl": 70, "maxfl": 200, "maxap" : "f/2.8", "mount" : ["Nikon DX","Nikon FX"]}'),
    },
  ];


export { cameras, lenses };
  