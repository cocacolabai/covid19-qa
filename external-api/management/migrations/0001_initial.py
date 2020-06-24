# Generated by Django 3.0.5 on 2020-05-24 19:12

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='QueryConf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parameter_name', models.CharField(max_length=100, unique=True)),
                ('conf', django.contrib.postgres.fields.jsonb.JSONField()),
            ],
        ),
    ]