from fuzzywuzzy import fuzz
from fuzzywuzzy import process

def phrase_detect (list_base, phrase):
    list_match = process.extract(phrase, list_base, scorer=fuzz.token_set_ratio, limit=30)
    return list_match[0]


def test():
    list_base = ['привет', 'как дела', 'пойдем']
    phrase = 'делы'
    print(phrase_detect(list_base, phrase))

if __name__ == "__main__":
    test()
