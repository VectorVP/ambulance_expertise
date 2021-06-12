import re
import cv2
import pytesseract
from pytesseract import Output

from fuzzywuzzy import fuzz
from fuzzywuzzy import process

def parse_image(image_path):
    """
    Find ICD-10 codes in the image.

    Args:
        image_path (string): image path to process

    Returns:
        list: list of all icd-10 codes in image
    """
    img = cv2.imread(image_path)
    img_data = pytesseract.image_to_string(img, output_type=Output.DICT)
    pattern = r'[QDEGKLMPOZJ]\d+\.?\d+?'
    icd_code = re.findall(pattern, img_data['text'])
    return icd_code

def phrase_detect(list_base, phrase):
    """
    Find similarity between source and parsed texts.

    Args:
        list_base (list of strings): list of source text phrases
        phrase (list of strings): list of parsed strings

    Returns:
        list of tuples: list of pairs word-confidence
    """
    list_match = process.extract(phrase, list_base, scorer=fuzz.token_set_ratio, limit=30)
    return list_match[0]

def test():
    list_base = ['привет', 'как дела', 'пойдем']
    phrase = 'делы'
    print('phrase_detect result', phrase_detect(list_base, phrase))
    print('parse_image result', parse_image('/home/vladislav/Downloads/photo_2021-06-10_09-49-26.jpg'))

if __name__ == "__main__":
    test()
