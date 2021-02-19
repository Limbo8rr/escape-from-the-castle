def on_overlap_tile(sprite, location):
    if currentLevel == 1:
        level_2()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_east,
    on_overlap_tile)
def level_2():
    global currentLevel, tileNow
    currentLevel = 2
    tileNow = tiles.create_map(tilemap("""
        level3
    """))
    tiles.load_map(tileNow)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(9, 5))
def torch():
    global tempTilemap, posX, posY, tileX
    tempTilemap = tiles.copy_map(tileNow)
    tiles.load_map(tempTilemap)
    posX = Math.round(mySprite.x / 16 + 0.5) - 1
    posY = Math.round(mySprite.y / 16 + 0.5) - 1
    while tileX <= tiles.tilemap_columns():
        tileY = 0
        while tileY <= tiles.tilemap_rows():
            if abs(posX - tileX) > 1 or abs(posY - tileY) > 1:
                tiles.set_tile_at(tiles.get_tile_location(tileX, tileY),
                    assets.tile("""
                        transparency16
                    """))
            tileY += 1
        tileX += 1
def level_1():
    global currentLevel, tileNow, mySprite
    currentLevel = 1
    scene.set_background_color(15)
    tileNow = tiles.create_map(tilemap("""
        level1
    """))
    tiles.load_map(tileNow)
    mySprite = sprites.create(img("""
            . . . . . . 5 . 5 . . . . . . . 
                    . . . . . f 5 5 5 f f . . . . . 
                    . . . . f 1 5 2 5 1 6 f . . . . 
                    . . . f 1 6 6 6 6 6 1 6 f . . . 
                    . . . f 6 6 f f f f 6 1 f . . . 
                    . . . f 6 f f d d f f 6 f . . . 
                    . . f 6 f d f d d f d f 6 f . . 
                    . . f 6 f d 3 d d 3 d f 6 f . . 
                    . . f 6 6 f d d d d f 6 6 f . . 
                    . f 6 6 f 3 f f f f 3 f 6 6 f . 
                    . . f f d 3 5 3 3 5 3 d f f . . 
                    . . f d d f 3 5 5 3 f d d f . . 
                    . . . f f 3 3 3 3 3 3 f f . . . 
                    . . . f 3 3 5 3 3 5 3 3 f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . f f . . f f . . . . .
        """),
        SpriteKind.player)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 1))
    controller.move_sprite(mySprite, 75, 75)
    scene.camera_follow_sprite(mySprite)
tileX = 0
posY = 0
posX = 0
tempTilemap: tiles.WorldMap = None
mySprite: Sprite = None
currentLevel = 0
tileNow: tiles.WorldMap = None
level_1()
def on_on_update():
    if currentLevel == 1:
        torch()
game.on_update(on_on_update)
