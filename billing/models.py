# Testing the reloader

# Create your models here.
from django.db import models

class Patient(models.Model):
    # Basic Information
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    
    # Date of Birth (Important for insurance verification)
    date_of_birth = models.DateField()
    
    # Insurance ID (Usually alphanumeric)
    insurance_id = models.CharField(max_length=30, unique=True, verbose_name="Insurance ID")
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.last_name}, {self.first_name} ({self.insurance_id})"
    
    # MAKE SURE THIS IS INSIDE THE CLASS
    @property
    def is_minor(self):
        from datetime import date
        today = date.today()
        # logic here...
        return True # (simplified for this example)