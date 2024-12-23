from urllib import response
from django.http import JsonResponse
from .models import User
from .serializers import USerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def user_list(request, format=None):


    #get all the users
    #serialize them
    #return json
    if request.method == 'GET':
        user = User.objects.all()
        serializer = USerSerializer(user, many=True)
        return Response(serializer.data)
    
    if request.method =='POST':
        serializer = USerSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        @api_view(['GET', 'PUT' , 'DELETE'])
        def user_detail(request, id, format=None):
            try:

            user = User.objects.get(pk=id)
            except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
            if request.method ==  'GET':
                serializer = USerSerializer(user)
                return Response(serializer.data)
            
            elif request.method == 'PUT':
                serializer = USerSerializer(user, data=request.data)
                if serializer.is_valid():
                     serlializer.save()
                     return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            elif request.method == 'DELETE':
                 user.delete()
                 return Response(status=status.HTTP_204_NO_CONTENT)



        