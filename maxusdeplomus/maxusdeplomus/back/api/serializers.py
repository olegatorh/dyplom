from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from .models import *


class CoursesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Courses
        fields = '__all__'


class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ['id', 'username', 'password', 'courses']
