controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . b b 3 3 3 3 b b . . . . 
        . . . c b 3 3 3 3 1 1 b c . . . 
        . . c b 3 3 3 3 3 1 1 1 b c . . 
        . c b 1 1 1 3 3 3 3 1 1 3 c c . 
        c b d 1 1 1 3 3 3 3 3 3 3 b b c 
        c b b d 1 3 3 3 3 3 1 1 1 b b c 
        c b b b 3 3 1 1 3 3 1 1 d d b c 
        . c b b b d d 1 1 3 b d d d c . 
        . . c c b b d d b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    ASTEROIDE.destroy()
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let ASTEROIDE: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "apreta A per començar i B per disparar")
effects.hearts.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . 2 d . . . . . . . 
    . . . . . . . 2 d . . . . . . . 
    . . . . . . . 2 d . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 2 3 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 1 3 . . . . . . . 
    . . . . . . 1 1 1 2 . . . . . . 
    . . . . . . 1 3 1 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 1 1 3 3 3 1 2 2 . . . . 
    . . f f f f 2 2 2 f f f f f . . 
    . 1 1 1 1 f f 3 f f f 1 3 2 2 . 
    1 1 1 1 1 1 f f f 3 3 1 3 3 2 2 
    2 1 1 1 1 1 2 f 3 3 3 3 1 3 2 2 
    `, SpriteKind.Player)
mySprite.setPosition(77, 32)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    ASTEROIDE = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . b b b b c . . c b b b c . . 
        . b d 1 1 1 3 c c 3 d 1 1 3 c . 
        b d 1 1 1 1 d d 1 3 1 1 1 1 3 c 
        b 1 1 1 1 1 d 1 1 d d 1 1 1 1 b 
        c 3 1 1 d c c 1 1 c c 1 1 1 1 b 
        c 3 3 d 3 . . c c . . d 1 1 d b 
        b 1 1 1 3 . . . . . . 3 d d 3 c 
        b 1 1 1 d b . . . . c d d 3 3 c 
        c 3 1 1 1 1 c . . b 1 1 1 d b c 
        . c d d 1 1 1 c b 3 1 1 1 1 c . 
        . . c 1 1 1 d d 3 3 1 1 1 b . . 
        . . . b 1 3 d 1 1 d d 3 b . . . 
        . . . . b 3 1 1 1 1 d c . . . . 
        . . . . . c b 1 1 b c . . . . . 
        . . . . . . c b b c . . . . . . 
        `, 0, 50)
    ASTEROIDE.x += randint(0, scene.screenWidth())
    ASTEROIDE.setKind(SpriteKind.Enemy)
})
