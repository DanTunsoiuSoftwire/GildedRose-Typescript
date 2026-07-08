export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];

            let currentDecrease = 1;
            if (currentItem.sellIn < 0) {
                currentDecrease *= 2;
            }

            if (currentItem.name == 'Sulfuras, Hand of Ragnaros') {
                continue;
            }

            currentItem.sellIn--;

            if (currentItem.name == 'Aged Brie') {
                currentItem.quality += currentDecrease;
                currentItem.quality = Math.min(currentItem.quality, 50);
                continue;
            }

            if (currentItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (currentItem.sellIn < 0) {
                    currentItem.quality = 0;
                    continue;
                }
                if (currentItem.sellIn < 10) {
                    currentDecrease++;
                }
                if (currentItem.sellIn < 5) {
                    currentDecrease++;
                }
                currentItem.quality += currentDecrease;
                continue;
            }

            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.items[i].quality > 0) {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                } else {
                    this.items[i].quality = this.items[i].quality - this.items[i].quality
                }
            }
        }

        return this.items;
    }
}