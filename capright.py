import mss
import mss.tools
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json
import threading

import time


def read_cl():
    cred = credentials.Certificate('serviceAccountKey.json')
    app = firebase_admin.initialize_app(cred, {'databaseURL':''})
    db = firestore.client()

    while True:
        

        users_ref = db.collection(u'Recog')
        docs = users_ref.stream()

        li = []

        for doc in docs:
            li.append(f'{doc.id} => {doc.to_dict()}')

        str = li[0]


        if li[0][19]=='T': break
        else: li.pop()
    

    num = 0

    while True:
        with mss.mss() as sct:        
            region = {'top': 80, 'left': 308, 'width': 298, 'height': 298}

            output = "img_{0}.png".format(num)
            img = sct.grab(region)
            print(num)
        
            mss.tools.to_png(img.rgb, img.size, output=output)
            num += 1

            users_ref = db.collection(u'Recog')
            docs = users_ref.stream()

            li = []

            for doc in docs:
                li.append(f'{doc.id} => {doc.to_dict()}')

            str = li[0]


            if li[0][19]=='F': break
            else: li.pop()
