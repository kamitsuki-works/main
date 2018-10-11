(function() {
  $(function() {
    var data, recipe, search, table;
    search = new Vue({
      el: '#search',
      data: {
        word: ''
      }
    });
    recipe = [
      {
        category: "item",
        item: "ぷに結晶",
        base1: "ひんやり石 x 1",
        base2: "ぷにぷに玉 x 1"
      },
      {
        category: "item",
        item: "どくうに",
        base1: "ウィローの枝 x 1",
        base2: "うに x 1",
        base3: "フェアリーバター x 1"
      },
      {
        category: "item",
        item: "しびれうに",
        base1: "ジギタリスの葉 x 1",
        base2: "うに x 1",
        base3: "フェアリーバター x 1"
      },
      {
        category: "item",
        item: "ブラックうに",
        base1: "ウィローの根 x 1",
        base2: "うに x 1",
        base3: "フェアリーバター x 1"
      },
      {
        category: "item",
        item: "ビックリうに",
        base1: "マンドラゴラの根 x 1",
        base2: "うに x 1",
        base3: "フェアリーバター x 1"
      },
      {
        category: "item",
        item: "うに袋",
        base1: "うに x 2",
        base2: "端切れ x 1"
      },
      {
        category: "item",
        item: "鍛冶ハンマー",
        base1: "鉄鉱石 x 1",
        base2: "魚のウロコ x 1"
      },
      {
        category: "item",
        item: "ぷにボール",
        base1: "ぷにぷに玉 x 1",
        base2: "木の蔓 x 1"
      },
      {
        category: "item",
        item: "クラフト",
        base1: "うに x 1",
        base2: "黒曜石 x 1"
      },
      {
        category: "item",
        item: "中和剤・青",
        base1: "ゼラチン x 2",
        base2: "魚のウロコ x 1"
      },
      {
        category: "item",
        item: "中和剤・赤",
        base1: "ゼラチン x 2",
        base2: "黒曜石 x 1"
      },
      {
        category: "item",
        item: "中和剤・黄",
        base1: "ゼラチン x 2",
        base2: "土かぶり x 1"
      },
      {
        category: "item",
        item: "中和剤・緑",
        base1: "ゼラチン x 2",
        base2: "フレッシュリーフ x 1"
      },
      {
        category: "item",
        item: "レヘルン",
        base1: "トネリコの枝 x 3",
        base2: "中和剤・赤 x 1",
        base3: "ひんやり石 x 1"
      },
      {
        category: "item",
        item: "ドナスト",
        base1: "トネリコの枝 x 1",
        base2: "グラビ石 x 1",
        base3: "中和剤・赤 x 1"
      },
      {
        category: "item",
        item: "ヒーリングサルブ",
        base1: "ヒース草 x 1",
        base2: "朝露の雫 x 1"
      },
      {
        category: "item",
        item: "ヒーリングウォーター",
        base1: "玉露の雫 x 1",
        base2: "ヒース草 x 1",
        base3: "中和剤・緑 x 1"
      },
      {
        category: "item",
        item: "メンタルウォーター",
        base1: "クローバー x 1",
        base2: "フェアリーバター x 1",
        base3: "中和剤・緑 x 1"
      },
      {
        category: "item",
        item: "メンタルボトル",
        base1: "四つ葉のクローバー x 1",
        base2: "フェアリーバター x 2",
        base3: "中和剤・緑 x 2",
        base4: "でかぷに玉 x 1"
      },
      {
        category: "item",
        item: "戦士の秘薬",
        base1: "マッシュルーム x 1",
        base2: "トーン x 1",
        base3: "中和剤・黄 x 1"
      },
      {
        category: "item",
        item: "魔法使いの秘薬",
        base1: "プラム x 1",
        base2: "トーン x 1",
        base3: "中和剤・黄 x 1"
      },
      {
        category: "item",
        item: "フラム",
        base1: "トネリコの枝 x 3",
        base2: "中和剤・赤 x 1",
        base3: "黒曜石 x 1"
      },
      {
        category: "item",
        item: "ランバー",
        base1: "トネリコの枝 x 2",
        base2: "ガマの油 x 1"
      },
      {
        category: "item",
        item: "闇百合の雫",
        base1: "闇百合 x 2",
        base2: "ガマの油 x 1"
      },
      {
        category: "item",
        item: "開眼の目覚め薬",
        base1: "朝露の雫 x 1",
        base2: "神秘のミルク x 1",
        base3: "睡蓮花 x 1"
      },
      {
        category: "item",
        item: "毒消し薬",
        base1: "朝露の雫 x 1",
        base2: "中和剤・緑 x 1",
        base3: "ヤドクタケ x 1"
      },
      {
        category: "item",
        item: "黄金エキス",
        base1: "朝露の雫 x 1",
        base2: "中和剤・緑 x 1",
        base3: "ハリエニシダ x 1"
      },
      {
        category: "item",
        item: "気付け薬",
        base1: "朝露の雫 x 1",
        base2: "中和剤・緑 x 1",
        base3: "ビリビリキノコ x 1"
      },
      {
        category: "item",
        item: "神秘のアンク",
        base1: "鉄鉱石 x 1",
        base2: "中和剤・緑 x 1",
        base3: "闇百合 x 1"
      },
      {
        category: "item",
        item: "癒しのアロマ",
        base1: "バラの花びら x 1",
        base2: "中和剤・緑 x 1",
        base3: "コンフリー x 1"
      },
      {
        category: "item",
        item: "魔法の書",
        base1: "ヒース草 x 2",
        base2: "トネリコの枝 x 2",
        base3: "ぷに玉？ x 2",
        base4: "睡蓮花 x 2"
      },
      {
        category: "item",
        item: "焼尽の絵の具",
        base1: "マスカット x 1",
        base2: "中和剤・青 x 1",
        base3: "朝露の雫 x 1",
        base4: "完熟リンゴ x 1"
      },
      {
        category: "item",
        item: "開拓スコップ",
        base1: "鉄鉱石 x 2",
        base2: "トネリコの枝 x 1"
      },
      {
        category: "item",
        item: "強力接着のり",
        base1: "ジャガイモ x 1",
        base2: "ガマの油 x 2",
        base3: "神秘のミルク x 1"
      },
      {
        category: "item",
        item: "特性ハぷにングBOX",
        base1: "闇百合の雫 x 1",
        base2: "クモの糸 x 1",
        base3: "ぷにぷに玉"
      },
      {
        category: "item",
        item: "ゼッテル",
        base1: "トネリコの枝 x 2",
        base2: "フレッシュリーフ x 2"
      },
      {
        category: "weapon",
        item: "ショートソード",
        base1: "黒曜石 x 1",
        base2: "トネリコの枝 x 1",
        base3: "鉄鉱石 x 1"
      },
      {
        category: "weapon",
        item: "騎士の剣",
        base1: "木の蔓 x 1",
        base2: "トネリコの枝 x 1",
        base3: "黒曜石 x 1"
      },
      {
        category: "weapon",
        item: "オルビュースの剣",
        base1: "鉄鉱石 x 2",
        base2: "水晶 x 5",
        base3: "折れた棒 x 3"
      },
      {
        category: "weapon",
        item: "妖精郷の剣",
        base1: "四つ葉のクローバー x 2",
        base2: "ジュエル x 5",
        base3: "でか黄ぷに玉 x 3"
      },
      {
        category: "weapon",
        item: "リブルムの剣",
        base1: "ひんやり石 x 2",
        base2: "重鉱石 x 5",
        base3: "大木の枝 x 3"
      },
      {
        category: "weapon",
        item: "アーテリアの剣",
        base1: "アイアンインゴット x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の牙 x 3",
        base4: "鉄鉱石 x 2"
      },
      {
        category: "weapon",
        item: "オルビュースの槍",
        base1: "鉄鉱石 x 2",
        base2: "水晶 x 5",
        base3: "折れた棒 x 3"
      },
      {
        category: "weapon",
        item: "妖精郷の槍",
        base1: "マンドラゴラの根 x 2",
        base2: "ジュエル x 5",
        base3: "でか黄ぷに玉 x 3"
      },
      {
        category: "weapon",
        item: "リブルムの槍",
        base1: "ひんやり石 x 2",
        base2: "重鉱石 x 5",
        base3: "大木の枝 x 3"
      },
      {
        category: "weapon",
        item: "アーテリアの槍",
        base1: "アイアンインゴット x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の牙 x 3",
        base4: "グラビ石 x 2"
      },
      {
        category: "weapon",
        item: "ウッドボウ",
        base1: "絹糸 x 1",
        base2: "トネリコの枝 x 1",
        base3: "鉄鉱石 x 1"
      },
      {
        category: "weapon",
        item: "狩り人の弓",
        base1: "重鉱石 x 1",
        base2: "トネリコの枝 x 1",
        base3: "黒曜石 x 1"
      },
      {
        category: "weapon",
        item: "オルビュースの弓",
        base1: "絹糸 x 2",
        base2: "水晶 x 5",
        base3: "折れた棒 x 3"
      },
      {
        category: "weapon",
        item: "妖精郷の弓",
        base1: "ウィローの根 x 2",
        base2: "ジュエル x 5",
        base3: "でか黄ぷに玉 x 3"
      },
      {
        category: "weapon",
        item: "リブルムの弓",
        base1: "バラの蔓 x 2",
        base2: "重鉱石 x 5",
        base3: "大木の枝 x 3"
      },
      {
        category: "weapon",
        item: "アーテリアの弓",
        base1: "アイアンインゴット x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の牙 x 3",
        base4: "グラビ石 x 2"
      },
      {
        category: "weapon",
        item: "見習い魔法使いの杖",
        base1: "ガマの油 x 1",
        base2: "トネリコの枝 x 1",
        base3: "鉄鉱石 x 1"
      },
      {
        category: "weapon",
        item: "見習い賢者の杖",
        base1: "睡蓮花 x 1",
        base2: "トネリコの枝 x 1",
        base3: "鉄鉱石 x 1"
      },
      {
        category: "weapon",
        item: "ラッキーロッド",
        base1: "ガマの油 x 1",
        base2: "トネリコの枝 x 1",
        base3: "黒曜石 x 1"
      },
      {
        category: "weapon",
        item: "オルビュースの杖",
        base1: "睡蓮花 x 2",
        base2: "水晶 x 5",
        base3: "折れた棒 x 3"
      },
      {
        category: "weapon",
        item: "妖精郷の杖",
        base1: "ウィローの枝 x 2",
        base2: "ジュエル x 5",
        base3: "でか黄ぷに玉 x 3"
      },
      {
        category: "weapon",
        item: "リブルムの杖",
        base1: "鉄鉱石 x 2",
        base2: "重鉱石 x 5",
        base3: "大木の枝 x 3"
      },
      {
        category: "weapon",
        item: "アーテリアの杖",
        base1: "アイアンインゴット x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の牙 x 3",
        base4: "トネリコの枝 x 2"
      },
      {
        category: "weapon",
        item: "ウッドメイス",
        base1: "木の蔓 x 1",
        base2: "トネリコの枝 x 1",
        base3: "鉄鉱石 x 1"
      },
      {
        category: "weapon",
        item: "トネリコのメイス",
        base1: "木の蔓 x 1",
        base2: "トネリコの枝 x 1",
        base3: "黒曜石 x 1"
      },
      {
        category: "weapon",
        item: "オルビュースのメイス",
        base1: "木の蔓 x 2",
        base2: "水晶 x 5",
        base3: "折れた棒 x 3"
      },
      {
        category: "weapon",
        item: "妖精郷のメイス",
        base1: "クローバー x 2",
        base2: "ジュエル x 5",
        base3: "でか黄ぷに玉 x 3"
      },
      {
        category: "weapon",
        item: "リブルムのメイス",
        base1: "バラの花びら x 2",
        base2: "重鉱石 x 5",
        base3: "大木の枝 x 3"
      },
      {
        category: "weapon",
        item: "アーテリアのメイス",
        base1: "アイアンインゴット x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の牙 x 3",
        base4: "闇百合 x 2"
      },
      {
        category: "armor",
        item: "おなべのふた",
        base1: "トネリコの枝 x 1",
        base2: "木の蔓 x 1"
      },
      {
        category: "armor",
        item: "ビスケットシールド",
        base1: "はちみつ x 1",
        base2: "アイアンインゴット x 1",
        base3: "小麦 x 3"
      },
      {
        category: "armor",
        item: "板チョコシールド",
        base1: "ワイン x 1",
        base2: "アイアンインゴット x 1",
        base3: "小麦 x 3"
      },
      {
        category: "armor",
        item: "オルビュースの盾",
        base1: "鉄鉱石 x 2",
        base2: "水晶 x 5",
        base3: "クズ鉄 x 3"
      },
      {
        category: "armor",
        item: "リブルムの盾",
        base1: "もこもこの毛皮 x 2",
        base2: "重鉱石 x 5",
        base3: "トレントの枝 x 3"
      },
      {
        category: "armor",
        item: "妖精郷の盾",
        base1: "四つ葉のクローバー x 2",
        base2: "ジュエル x 5",
        base3: "でかぷに玉 x 3"
      },
      {
        category: "armor",
        item: "アーテリアの盾",
        base1: "レザー x 2",
        base2: "蛍石 x 5",
        base3: "汚れた布 x 3",
        base4: "グラビ石 x 2"
      },
      {
        category: "armor",
        item: "アカデミーの魔法使い帽",
        base1: "端切れ x 1",
        base2: "ふわふわの羽毛 x 1"
      },
      {
        category: "armor",
        item: "狩人の羽飾り",
        base1: "ふわふわの羽毛 x 4",
        base2: "絹糸 x 2"
      },
      {
        category: "armor",
        item: "ウエスタンハット",
        base1: "レザー x 1",
        base2: "もこもこの毛皮 x 1"
      },
      {
        category: "armor",
        item: "ベレー帽",
        base1: "クロース x 1",
        base2: "四つ葉のクローバー x 1"
      },
      {
        category: "armor",
        item: "オルビュースの帽子",
        base1: "木の蔓 x 2",
        base2: "水晶 x 5",
        base3: "クズ鉄 x 3"
      },
      {
        category: "armor",
        item: "妖精郷の帽子",
        base1: "クローバー x 2",
        base2: "ジュエル x 5",
        base3: "でかぷに玉 x 3"
      },
      {
        category: "armor",
        item: "リブルムの帽子",
        base1: "獣の皮 x 2",
        base2: "重鉱石 x 5",
        base3: "トレントの枝 x 3"
      },
      {
        category: "armor",
        item: "アーテリアのフード",
        base1: "アイアンインゴット x 2",
        base2: "蛍石 x 5",
        base3: "汚れた布 x 3",
        base4: "木の端切れ x 2"
      },
      {
        category: "armor",
        item: "玉石の髪飾り",
        base1: "砕けた玉石 x 2",
        base2: "朽ちた骨 x 2"
      },
      {
        category: "armor",
        item: "アカデミーの錬金術師服♂",
        base1: "朝露の雫 x 1",
        base2: "端切れ x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "アカデミーの錬金術師服♀",
        base1: "朝露の雫 x 1",
        base2: "端切れ x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "アカデミーの魔法使い服♀",
        base1: "ガマの油 x 1",
        base2: "端切れ x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "アカデミーの賢者服♀",
        base1: "睡蓮花 x 1",
        base2: "端切れ x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "アカデミーの衛士服",
        base1: "木の蔓 x 1",
        base2: "端切れ x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "アンゼリカの服♀",
        base1: "ふわふわの羽毛 x 1",
        base2: "端切れ x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "ヴァレリアンの服",
        base1: "クロース x 1",
        base2: "獣の皮 x 3",
        base3: "闇百合 x 2"
      },
      {
        category: "armor",
        item: "布の衣服",
        base1: "ふわふわの羽毛 x 1",
        base2: "木の蔓 x 1",
        base3: "トネリコの枝 x 1"
      },
      {
        category: "armor",
        item: "皮の衣服",
        base1: "ふわふわの羽毛 x 1",
        base2: "木の蔓 x 1",
        base3: "獣の皮 x 1"
      },
      {
        category: "armor",
        item: "魔法使いの衣服",
        base1: "ふわふわの羽毛 x 1",
        base2: "木の蔓 x 1",
        base3: "朝露の雫 x 1"
      },
      {
        category: "armor",
        item: "絹の衣服",
        base1: "ふわふわの羽毛 x 1",
        base2: "木の蔓 x 1",
        base3: "絹糸 x 1"
      },
      {
        category: "armor",
        item: "冒険者の衣服",
        base1: "ふわふわの羽毛 x 1",
        base2: "木の蔓 x 1",
        base3: "小動物の骨 x 1"
      },
      {
        category: "armor",
        item: "オルビュースの礼服♂",
        base1: "鉄鉱石 x 2",
        base2: "水晶 x 5",
        base3: "壊れた鎧 x 3"
      },
      {
        category: "armor",
        item: "オルビュースの礼服♀",
        base1: "鉄鉱石 x 2",
        base2: "水晶 x 5",
        base3: "壊れた鎧 x 3"
      },
      {
        category: "armor",
        item: "妖精郷の衣♂",
        base1: "四つ葉のクローバー x 2",
        base2: "ジュエル x 5",
        base3: "でか赤ぷに玉 x 3"
      },
      {
        category: "armor",
        item: "妖精郷の衣♀",
        base1: "四つ葉のクローバー x 2",
        base2: "ジュエル x 5",
        base3: "でか赤ぷに玉 x 3"
      },
      {
        category: "armor",
        item: "リブルムの礼服♂",
        base1: "赤い端切れ x 2",
        base2: "重鉱石 x 5",
        base3: "大木の根 x 3"
      },
      {
        category: "armor",
        item: "リブルムの礼服♀",
        base1: "赤い端切れ x 2",
        base2: "重鉱石 x 5",
        base3: "大木の根 x 3"
      },
      {
        category: "armor",
        item: "アーテリアの服♂",
        base1: "クロース x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の糸 x 3",
        base4: "もこもこの毛皮 x 2"
      },
      {
        category: "armor",
        item: "アーテリアの服♀",
        base1: "クロース x 2",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の糸 x 3",
        base4: "もこもこの毛皮 x 2"
      },
      {
        category: "armor",
        item: "玉石の鎧",
        base1: "虹玉石 x 2",
        base2: "竜のウロコ x 2"
      },
      {
        category: "armor",
        item: "知的なメガネ",
        base1: "ぷに結晶 x 1",
        base2: "鉄鉱石 x 1"
      },
      {
        category: "armor",
        item: "眼帯",
        base1: "怪しい液体 x 2",
        base2: "汚れた布 x 2"
      },
      {
        category: "armor",
        item: "矢筒",
        base1: "獣の皮 x 1",
        base2: "クロース x 1",
        base3: "バラの蔓 x 2"
      },
      {
        category: "armor",
        item: "ぷにぷにリュック",
        base1: "端切れ x 2",
        base2: "ぷに結晶 x 1",
        base3: "ぷにぷに玉 x 2"
      },
      {
        category: "armor",
        item: "妖精郷の羽",
        base1: "フェアリーバター x 2",
        base2: "ジュエル x 5",
        base3: "でか赤ぷに玉 x 2"
      },
      {
        category: "armor",
        item: "ウーズリング",
        base1: "小動物の骨 x 3",
        base2: "ゼラチン x 2"
      },
      {
        category: "armor",
        item: "水晶の指輪",
        base1: "水晶 x 1",
        base2: "重鉱石 x 1"
      },
      {
        category: "armor",
        item: "クールリング",
        base1: "ひんやり石 x 3",
        base2: "鉄鉱石 x 2"
      },
      {
        category: "armor",
        item: "ボーンチャーム",
        base1: "アイアンインゴット x 1",
        base2: "朽ちた骨 x 5",
        base3: "小動物の骨 x 3"
      },
      {
        category: "armor",
        item: "オルビュースの指輪",
        base1: "水晶 x 5",
        base2: "壊れた鎧 x 2"
      },
      {
        category: "armor",
        item: "妖精郷の指輪",
        base1: "ジュエル x 5",
        base2: "でか赤ぷに玉 x 2"
      },
      {
        category: "armor",
        item: "リブルムの指輪",
        base1: "重鉱石 x 5",
        base2: "大木の根 x 2"
      },
      {
        category: "armor",
        item: "アーテリアの指輪",
        base1: "闇百合の雫 x 1",
        base2: "蛍石 x 5",
        base3: "女王蜘蛛の糸 x 3"
      },
      {
        category: "food",
        item: "ジャム",
        base1: "完熟リンゴ x 1",
        base2: "はちみつ x 1"
      },
      {
        category: "food",
        item: "レバーペースト",
        base1: "マッシュルーム x 1",
        base2: "ワイルドレバー x 1",
        base3: "ワイン x 1"
      },
      {
        category: "food",
        item: "シェパーズパイ",
        base1: "小麦 x 1",
        base2: "ジャガイモ x 1",
        base3: "獣の肉 x 1"
      },
      {
        category: "food",
        item: "スコッチエッグ",
        base1: "タマゴ x 1",
        base2: "獣の肉 x 1",
        base3: "小麦 x 1"
      },
      {
        category: "food",
        item: "パンプキンパイ",
        base1: "カボチャ x 2",
        base2: "小麦 x 3"
      },
      {
        category: "food",
        item: "フィッシュ&チップス",
        base1: "小麦 x 1",
        base2: "タラ x 1",
        base3: "ジャガイモ x 1"
      },
      {
        category: "food",
        item: "リーキスープ",
        base1: "リーキ x 1",
        base2: "サーモン x 1"
      },
      {
        category: "food",
        item: "リンゴジュース",
        base1: "青リンゴ x 1",
        base2: "はちみつ x 1"
      },
      {
        category: "food",
        item: "ブドウジュース",
        base1: "マスカット x 1",
        base2: "完熟ブドウ x 1"
      },
      {
        category: "food",
        item: "ワイン",
        base1: "赤ぷに玉 x 1",
        base2: "マスカット x 1",
        base3: "完熟ブドウ x 1"
      },
      {
        category: "food",
        item: "フレッシュリーフティー",
        base1: "朝露の雫 x 1",
        base2: "フレッシュリーフ x 1",
        base3: "はちみつ x 1"
      },
      {
        category: "food",
        item: "カスタードプディング",
        base1: "タマゴ x 1",
        base2: "玉露の雫 x 1",
        base3: "神秘のミルク x 1"
      },
      {
        category: "food",
        item: "フルーツシャーベット",
        base1: "ひんやり石 x 1",
        base2: "プラム x 1",
        base3: "リンゴジュース x 1"
      },
      {
        category: "food",
        item: "はちみつドロップ",
        base1: "神秘のミルク x 1",
        base2: "はちみつ x 1",
        base3: "ぷにぷに玉 x 1"
      },
      {
        category: "food",
        item: "パン",
        base1: "小麦 x 1",
        base2: "ウォールナッツ x 1"
      },
      {
        category: "food",
        item: "ぷにまん",
        base1: "小麦 x 1",
        base2: "タマゴ x 1",
        base3: "ぷにぷに玉 x 1"
      }
    ];
    data = function() {
      return {
        word: '',
        recipes: recipe
      };
    };
    table = new Vue({
      el: '#recipe',
      data: data,
      computed: {
        filterRecipe: function() {
          return this.recipes.filter(function(r) {
            return (search.word == null) || r.item.indexOf(search.word) > -1 || ((r.base1 != null) && r.base1.indexOf(search.word) > -1) || ((r.base2 != null) && r.base2.indexOf(search.word) > -1) || ((r.base3 != null) && r.base3.indexOf(search.word) > -1) || ((r.base4 != null) && r.base4.indexOf(search.word) > -1);
          });
        }
      }
    });
  });

}).call(this);
