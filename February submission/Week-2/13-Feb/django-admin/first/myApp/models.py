from django.db import models
from django.utils import timezone

# Create your models here.
class Nalles(models.Model):
    DEPT = [
        ('CSE', 'Computer Science'),
        ('EE', 'Electrical'),
        ('ECE', 'Electronic and Communication'),
        ('MSC', 'Master of Science'),
    ]
    
    name = models.CharField(max_length=40)
    dept = models.CharField(choices=DEPT)
    birth_date = models.DateField()
    img = models.ImageField(upload_to='nalles_img/')