from django.conf.urls import include, url
from django.contrib import admin

from questions.views import AnswerFeedbackApiView, QuestionApiView

urlpatterns = [
    url('admin/', admin.site.urls),
    url('question/', QuestionApiView.as_view()),
    url('feedback/', AnswerFeedbackApiView.as_view())
]
