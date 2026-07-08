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

            if (currentItem.name == 'Sulfuras, Hand of Ragnaros') {
                continue;
            }

            currentItem.sellIn--;
            if (currentItem.sellIn < 0) {
                currentDecrease *= 2;
            }

            switch (currentItem.name) {
                case 'Aged Brie':
                    currentItem.quality += currentDecrease;
                    currentItem.quality = Math.min(currentItem.quality, 50);
                    continue;
                case 'Backstage passes to a TAFKAL80ETC concert':
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
                    currentItem.quality = Math.min(currentItem.quality, 50);
                    continue;
                default:
                    currentItem.quality -= currentDecrease;
                    currentItem.quality = Math.max(currentItem.quality, 0);
            }
        }

        return this.items;
    }
}