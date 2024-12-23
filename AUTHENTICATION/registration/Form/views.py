from django.shortcuts import render

# Create your views here.
def Homepage(request):
    pass

def SignupPage(request):
    return render (request, 'sign Up.html')

def LoginPage(request):
    pass
