from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsersViewSet, CoursesViewSet


router = DefaultRouter()
router.register("Users", UsersViewSet, basename='Users')
router.register("Courses", CoursesViewSet, basename='Courses')


urlpatterns = [
    path('api/', include(router.urls))
]