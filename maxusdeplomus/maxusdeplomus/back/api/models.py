from django.db import models


class Courses(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=500)
    quiz = models.CharField(max_length=500, default=None)
    video = models.CharField(max_length=500)
    image = models.CharField(max_length=500)


class Users(models.Model):
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    courses = models.ManyToManyField(Courses, blank=True)

