import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime


def send2db():
    cred = credentials.Certificate("serviceAccountKey.json")
    #firebase_admin.initialize_app(cred, {'databaseURL':'firebase-adminsdk-96ceh@myproject-3628a.iam.gserviceaccount.com'})
    db = firestore.client()

    

    # 데이터 전송
    doc_ref = db.collection(u'messages').document()
    doc_ref.set({
        u'message':"대출금 갚다",
        u'timestamp':firestore.SERVER_TIMESTAMP,
        u'user':"host"
    })
    # doc_ref.set({
    #     u'time': str(current_time),
    # })
    # doc_ref = db.collection(u'location').document(u'QhyHZBPdz52rkAElYGbi')
    # doc_ref.set({
    #     u'floor': str(layer),
    # })
