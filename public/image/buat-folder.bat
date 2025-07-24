@echo off
setlocal enabledelayedexpansion

:: Daftar brand (tanpa Dove)
set brands=Lifebuoy Lux "Pond's" Vaseline Citra Sunsilk Clear Tresemmé Rexona Axe Rinso Molto Sunlight Vixal "Super Pell" Domestos Royco Bango Jawara Knorr Breyers Cornetto Magnum "Paddle Pop" Lipton SariWangi Buavita Pepsodent Signal "Close up"

for %%B in (%brands%) do (
    set "raw=%%~B"

    :: Bersihkan karakter spesial
    set "slug=!raw:'=!"
    set "slug=!slug:é=e!"
    set "slug=!slug:è=e!"
    set "slug=!slug:ê=e!"
    set "slug=!slug:ù=u!"
    set "slug=!slug:û=u!"
    set "slug=!slug: =-!"

    :: Simpan ke file sementara
    echo !slug! > temp.txt

    :: Baca dan ubah ke lowercase pakai powershell
    for /f %%L in ('powershell -NoProfile -Command "(Get-Content temp.txt).ToLower()"') do (
        set "foldername=%%L"
    )

    del temp.txt
    mkdir "!foldername!"
)

echo Folder berhasil dibuat.
pause
