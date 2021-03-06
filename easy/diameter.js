const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

// const test = `13
// 2 7 2
// 1 7 6
// 5 1 8
// 2 8 6
// 8 6 9
// 10 5 5
// 9 1 9
// 0 10 15
// 3 1 21
// 6 4 3
// 6 11 4
// 7 12 33`.split('\n');

// const test = `5
// 3 4 3
// 0 3 4
// 0 2 6
// 1 4 9`.split('\n');

// const test = `16
// 2 3 92
// 5 2 10
// 14 3 42
// 2 4 26
// 14 12 50
// 4 6 93
// 9 6 24
// 15 14 9
// 0 2 95
// 8 0 90
// 0 13 60
// 9 10 59
// 1 0 66
// 11 12 7
// 7 10 35`.split('\n');

const test = `320
290 312 313
312 183 777
89 312 614
290 126 371
183 295 812
126 97 616
147 183 542
290 172 944
140 89 39
56 97 419
295 300 114
100 300 43
9 100 247
140 81 790
115 300 892
99 81 857
78 140 150
97 226 703
78 243 476
183 7 909
290 179 372
137 300 260
300 98 575
141 183 56
183 239 740
137 0 844
243 233 169
160 97 332
89 116 17
223 233 529
172 45 629
150 140 811
223 174 105
140 164 930
141 102 305
312 255 677
100 212 33
116 58 533
98 105 328
167 0 525
160 2 796
99 315 49
2 240 68
212 249 361
140 79 682
81 29 452
224 7 683
217 233 493
183 197 946
284 9 679
79 278 776
37 98 980
224 38 700
126 235 598
223 108 514
174 119 261
107 89 561
100 73 676
81 25 173
79 157 497
179 12 637
226 154 50
183 42 527
295 296 744
241 290 46
273 174 175
170 295 960
13 226 277
295 39 906
146 284 350
99 148 713
180 233 175
229 296 654
293 312 734
257 140 794
219 170 255
47 9 542
116 156 753
12 4 920
220 78 53
224 274 615
100 289 261
181 223 940
139 293 378
102 51 791
31 273 14
2 227 847
95 315 914
220 297 810
178 257 277
156 134 271
246 56 113
92 38 193
83 274 845
269 235 532
304 12 720
293 142 536
80 170 864
163 224 291
190 249 708
240 145 584
9 221 664
63 95 710
30 269 591
100 285 547
255 17 633
205 29 122
160 236 395
226 46 502
233 143 702
54 181 789
229 85 528
273 187 566
169 146 825
190 8 154
156 171 512
88 97 749
144 255 50
106 2 192
118 134 647
154 113 944
88 279 580
65 226 727
135 273 336
137 67 229
136 142 559
119 173 244
147 175 828
110 73 595
128 219 626
225 296 145
285 112 841
62 296 283
311 205 412
223 161 64
142 207 341
128 133 167
278 214 701
56 309 191
312 36 403
6 290 434
4 199 852
301 169 6
253 150 901
161 204 704
83 195 244
221 268 866
263 89 437
91 92 695
228 112 626
115 96 1
167 68 2
151 169 615
82 100 550
197 138 4
109 140 974
275 135 368
227 250 687
22 128 308
36 122 195
300 125 928
226 165 905
102 305 432
226 281 229
186 147 429
262 241 835
245 305 569
3 224 953
128 276 493
27 138 869
88 24 554
121 0 81
24 131 909
77 219 136
16 45 304
167 71 855
103 226 556
303 172 180
256 289 348
177 24 873
205 193 532
313 145 568
222 285 413
81 57 539
251 273 48
2 188 244
124 45 166
233 237 504
203 138 809
235 50 921
265 229 304
238 233 8
51 74 972
54 277 549
66 103 410
177 59 537
52 256 160
212 33 641
153 56 319
23 255 71
155 42 302
275 123 436
308 92 91
126 317 16
64 25 428
198 141 161
262 232 891
272 124 210
206 223 733
139 210 733
142 159 218
173 196 80
102 101 685
237 306 595
319 293 26
1 118 471
292 58 552
198 176 497
35 240 116
190 234 585
105 5 543
162 228 80
107 286 874
177 280 500
149 102 257
283 133 480
169 230 84
15 306 543
87 221 749
114 155 524
205 44 649
299 133 859
201 221 992
70 71 276
184 203 423
146 49 4
29 314 862
98 117 650
67 242 691
248 299 665
48 176 745
43 295 628
274 189 330
100 302 332
117 14 728
209 4 619
5 120 636
55 275 590
301 310 819
191 135 13
264 33 631
269 247 334
208 143 506
41 217 983
60 239 611
90 8 672
244 191 506
86 100 50
215 147 592
212 260 245
168 183 980
165 218 707
18 39 696
76 165 907
94 173 396
145 158 148
116 21 869
259 117 160
202 119 28
248 192 65
261 57 662
188 288 284
28 44 731
88 213 570
262 287 718
221 129 321
177 34 544
132 63 462
245 152 738
53 25 570
318 296 796
93 300 90
46 19 173
257 166 714
232 282 912
130 159 274
18 194 313
116 294 532
170 267 554
211 314 490
72 239 503
20 190 242
182 287 47
190 254 306
146 69 912
41 75 740
173 258 949
84 238 786
61 195 102
307 57 357
286 271 705
291 136 245
38 11 530
58 316 323
7 252 73
56 231 564
298 23 775
103 270 230
142 32 807
110 10 347
169 216 929
111 149 812
56 127 361
200 94 754
12 40 816
206 266 420
104 168 567
139 185 994
114 26 391`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;


class Graph {
    constructor(nodesCount) {
        this._nodes = new Map();
        this._singleNodes = new Set();
        this.curPath = 0;
        this.maxPath = 0;
        this.next = 0;
    }

    addEdge(from, to, len) {
        this._processEdges(from, to, len);
    }

    _processEdges(from, to, len) {
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }
        if (!this._nodes.has(to)) {
            this._nodes.set(to, []);
        }

        this._nodes.get(from).push({
            children: to,
            len,
        });
        this._nodes.get(to).push({
            children: from,
            len,
        });
    }

    getSingleNodes() {
        this._nodes.forEach((el, key) => {
            if (el.length === 1) {
                this._singleNodes.add(key);
            }
        });
    }

    findMaxPath(curVertex, prev) {
        if (this._nodes.get(curVertex).length === 1 && prev === this._nodes.get(curVertex)[0].children) {
            if (this.curPath > this.maxPath) {
                this.maxPath = this.curPath;
                this.next = curVertex;
            }
            return;
        }

        for (const nextVertex of this._nodes.get(curVertex)) {
            if (nextVertex.children === prev) {
                continue;
            }
            this.curPath += nextVertex.len;
            this.findMaxPath(nextVertex.children, curVertex);
            this.curPath -= nextVertex.len;
        }
    }

    getMaxPath() {
        this.getSingleNodes();
        for (const el of this._singleNodes) {
            this.findMaxPath(el, -1);
        }
    }
}

const nodesCount = +gets();
const graph = new Graph(nodesCount);

for (let i = 1; i < nodesCount; i += 1) {
    const [from, to, len] = gets().split(' ').map(Number);
    graph.addEdge(from, to, len);
}

graph.getMaxPath();
print(graph.maxPath);