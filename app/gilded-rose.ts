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

    updateQualityBackstage(currentItem:Item, currentIncrease:number) {
        if (currentItem.sellIn < 0) {
            currentItem.quality = 0;
            return;
        }
        if (currentItem.sellIn < 10) {
            currentIncrease++;
        }
        if (currentItem.sellIn < 5) {
            currentIncrease++;
        }
        currentItem.quality += currentIncrease;
        currentItem.quality = Math.min(currentItem.quality, 50);
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            let currentIncrease = 1;

            if (currentItem.name == 'Sulfuras, Hand of Ragnaros') {
                continue;
            }

            currentItem.sellIn--;
            if (currentItem.sellIn < 0) {
                currentIncrease *= 2;
            }

            switch (currentItem.name) {
                case 'Aged Brie':
                    currentItem.quality += currentIncrease;
                    currentItem.quality = Math.min(currentItem.quality, 50);
                    continue;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    this.updateQualityBackstage(currentItem, currentIncrease);
                    continue;
                case 'Conjured Mana Cake':
                    currentIncrease *= 2;
                default:
                    currentItem.quality -= currentIncrease;
                    currentItem.quality = Math.max(currentItem.quality, 0);
            }
        }

        return this.items;
    }
}