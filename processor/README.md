### Notes

1. To use Tesseract it is necessary to install it via following command:
```
sudo apt-get install tesseract-ocr
```

2. Install docker-compose in virtualenv with following command:
```
pip3 install --upgrade --force-reinstall --no-cache-dir docker-compose && sudo ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
```
If error ```bash: /usr/bin/docker-compose: No such file or directory``` occured, run:
```
hash docker-compose
```

