<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit11f27f9ab9a7f1fdb9f53e28a7991c8a
{
    public static $prefixLengthsPsr4 = array (
        'V' => 
        array (
            'VektorInc\\VK_Term_Color\\' => 24,
            'VektorInc\\VK_Helpers\\' => 21,
            'VektorInc\\VK_Font_Awesome_Versions\\' => 35,
            'VektorInc\\VK_Breadcrumb\\' => 24,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'VektorInc\\VK_Term_Color\\' => 
        array (
            0 => __DIR__ . '/..' . '/vektor-inc/vk-term-color/src',
        ),
        'VektorInc\\VK_Helpers\\' => 
        array (
            0 => __DIR__ . '/..' . '/vektor-inc/vk-helpers/src',
        ),
        'VektorInc\\VK_Font_Awesome_Versions\\' => 
        array (
            0 => __DIR__ . '/..' . '/vektor-inc/font-awesome-versions/src',
        ),
        'VektorInc\\VK_Breadcrumb\\' => 
        array (
            0 => __DIR__ . '/..' . '/vektor-inc/vk-breadcrumb/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'VektorInc\\VK_Breadcrumb\\VkBreadcrumb' => __DIR__ . '/..' . '/vektor-inc/vk-breadcrumb/src/VkBreadcrumb.php',
        'VektorInc\\VK_Font_Awesome_Versions\\VkFontAwesomeVersions' => __DIR__ . '/..' . '/vektor-inc/font-awesome-versions/src/VkFontAwesomeVersions.php',
        'VektorInc\\VK_Helpers\\VkHelpers' => __DIR__ . '/..' . '/vektor-inc/vk-helpers/src/VkHelpers.php',
        'VektorInc\\VK_Term_Color\\VkTermColor' => __DIR__ . '/..' . '/vektor-inc/vk-term-color/src/VkTermColor.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit11f27f9ab9a7f1fdb9f53e28a7991c8a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit11f27f9ab9a7f1fdb9f53e28a7991c8a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit11f27f9ab9a7f1fdb9f53e28a7991c8a::$classMap;

        }, null, ClassLoader::class);
    }
}
