cordova build android --release

Move d:\GoogleDrive\Lavoro\Progetti\Asso\Phoenix\SW\PhoenixApp\AppMobile\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk d:\GoogleDrive\Lavoro\Progetti\Asso\Phoenix\SW\PhoenixApp\AppMobile\ant-build
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore PhoenixApp.keystore d:\GoogleDrive\Lavoro\Progetti\Asso\Phoenix\SW\PhoenixApp\AppMobile\ant-build\app-release-unsigned.apk PhoenixApp

zipalign -v 4 d:\GoogleDrive\Lavoro\Progetti\Asso\Phoenix\SW\PhoenixApp\AppMobile\ant-build\app-release-unsigned.apk  d:\GoogleDrive\Lavoro\Progetti\Asso\Phoenix\SW\PhoenixApp\AppMobile\ant-build\PhoenixApp.apk

keystore: andromeda75