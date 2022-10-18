import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime


def send2db():
    cred = credentials.Certificate("serviceAccountKey.json")
    #firebase_admin.initialize_app(cred, {'databaseURL':''})
    db = firestore.client()

    

    # 데이터 전송
    doc_ref = db.collection(u'messages').document()
    doc_ref.set({
        u'message':"대출금 갚다",
        u'timestamp':firestore.SERVER_TIMESTAMP,
        u'user':"host"
    })
    
