from django.urls import path
from .views import BlogPageView
urlpatterns=[
    path('django-in-india/',BlogPageView.as_view()),
]
