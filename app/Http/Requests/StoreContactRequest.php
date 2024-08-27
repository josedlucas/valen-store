<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Http;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fullname' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'message' => 'required',
            'recaptcha' => 'required|string'
        ];
    }

    public function messages()
    {
        return [
            'recaptcha.required' => 'El reCAPTCHA es obligatorio.',
            'recaptcha.captcha' => 'La verificación reCAPTCHA falló, inténtalo nuevamente.',
        ];
    }

    // Validar el reCAPTCHA después de que las otras validaciones pasen
    protected function passedValidation()
    {
        $this->validateRecaptcha($this->input('recaptcha'));
    }

    // Método para validar el token de reCAPTCHA
    protected function validateRecaptcha($token)
    {
        $secretKey = config('services.recaptcha.secret');  // Asegúrate de configurar esto en el archivo de configuración
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => $secretKey,
            'response' => $token,
            'remoteip' => $this->ip(),
        ]);

        $responseBody = $response->json();

        if (!$responseBody['success'] || $responseBody['score'] < 0.5) {
            // Lanza una excepción si la validación de reCAPTCHA falla
            $this->failedRecaptcha();
        }
    }

    protected function failedRecaptcha()
    {
        throw \Illuminate\Validation\ValidationException::withMessages([
            'recaptcha' => 'La verificación reCAPTCHA falló. Inténtalo de nuevo.',
        ]);
    }
}
