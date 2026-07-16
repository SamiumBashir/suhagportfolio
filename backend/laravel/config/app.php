<?php

return [
    'name' => env('APP_NAME', 'Laravel'),
    'env' => env('APP_ENV', 'production'),
    'debug' => (bool) env('APP_DEBUG', false),
    'providers' => [
        Illuminate\\Auth\\AuthServiceProvider::class,
        Illuminate\\Broadcasting\\BroadcastServiceProvider::class,
        Illuminate\\Bus\\BusServiceProvider::class,
        Illuminate\\Cache\\CacheServiceProvider::class,
        Illuminate\\Foundation\\Providers\\ConsoleSupportServiceProvider::class,
        Illuminate\\Foundation\\Providers\\FilingServiceProvider::class,
        Illuminate\\Foundation\\Providers\\FoundationServiceProvider::class,
        Illuminate\\Hashing\\HashServiceProvider::class,
        Illuminate\\Mail\\MailServiceProvider::class,
        Illuminate\\Notifications\\NotificationServiceProvider::class,
        Illuminate\\Pagination\\PaginationServiceProvider::class,
        Illuminate\\Pipeline\\PipelineServiceProvider::class,
        Illuminate\\Queue\\QueueServiceProvider::class,
        Illuminate\\Redis\\RedisServiceProvider::class,
        Illuminate\\Session\\SessionServiceProvider::class,
        Illuminate\\Translation\\TranslationServiceProvider::class,
        Illuminate\\Validation\\ValidationServiceProvider::class,
        Illuminate\\View\\ViewServiceProvider::class,
        Laravel\\Sanctum\\SanctumServiceProvider::class,
    ],
];
