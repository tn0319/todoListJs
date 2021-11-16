const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const quotes = [
    {
        quotes : "신은 용기있는자를 결코 버리지 않는다",
        author : "켄러" 
    },
    {
        quotes : "피할수 없으면 즐겨라",
        author : "로버트 엘리엇" 
    },
    {
        quotes : "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author : "이드리스 샤흐" 
    },
    {
        quotes : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다.",
        author : "랄프 왈도 에머슨" 
    },
    {
        quotes : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author : "앙드레 말로" 
    },
    {
        quotes : "행복은 습관이다,그것을 몸에 지니라",
        author : "허버드" 
    },
    {
        quotes : "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author : "톰 모나건" 
    },
]


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
