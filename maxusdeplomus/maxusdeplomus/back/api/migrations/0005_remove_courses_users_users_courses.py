# Generated by Django 4.0.5 on 2022-06-06 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_courses_users_courses_users'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='courses',
            name='users',
        ),
        migrations.AddField(
            model_name='users',
            name='courses',
            field=models.ManyToManyField(to='api.courses'),
        ),
    ]
