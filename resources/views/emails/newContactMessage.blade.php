<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> {{ $contactMessage['fullname'] }}</p>
        <p><strong>Teléfono:</strong> {{ $contactMessage['phone'] }}</p>
        <p><strong>Email:</strong> {{ $contactMessage['email'] }}</p>
        <p><strong>Mensaje:</strong></p>
        <p>{{ $contactMessage['message'] }}</p>
    </body>
</html>
