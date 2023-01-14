from django.db import models
from apps.category.models import Category
from apps.size.models import Size

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sizes = models.ManyToManyField(Size)
    quantity = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
