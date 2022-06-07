# Generated by Django 4.0.5 on 2022-06-06 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_courses_price_remove_users_courses_library_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='courses',
            name='users',
        ),
        migrations.AddField(
            model_name='courses',
            name='users',
            field=models.ManyToManyField(to='api.users'),
        ),
    ]
