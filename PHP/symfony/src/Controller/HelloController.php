<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class HelloController
{
    // Routes are declared right on the method with an attribute.
    #[Route('/hello/{name}')]
    public function hello(string $name): JsonResponse
    {
        return new JsonResponse(['message' => "Hello, $name"]);
    }
}
