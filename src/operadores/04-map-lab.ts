import {fromEvent} from "rxjs";
import {map, tap} from "rxjs/operators";

const text = document.createElement('div');
text.innerText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dui eros, et sodales massa fermentum sed. Aliquam quis accumsan risus. Donec elementum, enim eu condimentum elementum, lectus tellus aliquam ipsum, ut viverra quam ligula eu augue. Donec quis imperdiet sapien, eu consequat ex. Nam luctus justo in sagittis venenatis. Proin vitae imperdiet ante. Sed vulputate lectus a semper ullamcorper.
<br/><br/>
Suspendisse non sagittis nunc, vel iaculis nibh. Fusce fermentum lectus nulla, eu condimentum velit mollis id. Maecenas porta eros tortor, in ornare lectus iaculis quis. Vivamus in nulla dignissim, lacinia urna eu, rutrum leo. Curabitur nec augue id augue elementum fermentum vel id lorem. Nulla ultricies vehicula velit id tempor. Nulla tempus, nisl a gravida rutrum, mauris nulla tincidunt orci, quis hendrerit ipsum arcu ut odio. Fusce nunc nulla, ullamcorper a metus a, ultrices consectetur sem. Curabitur egestas ac lectus sed porta. Vestibulum auctor magna ante, quis pharetra tortor finibus sit amet. Praesent neque risus, interdum vitae tempus id, blandit nec arcu. Donec tincidunt malesuada rhoncus. Vestibulum rutrum nibh at augue varius, vel gravida mi mollis. Aenean ut nibh sem. Donec sit amet tincidunt metus, quis fringilla lacus. In ut urna mi.
<br/><br/>
Proin aliquet sodales ex vel rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ut consequat lacus, sit amet suscipit magna. Donec sit amet eleifend lorem. Proin vitae tristique augue, id ultricies magna. Maecenas rutrum ipsum mauris, in fringilla odio commodo eu. Morbi non sapien at quam varius vehicula non vitae orci. Proin volutpat justo et est feugiat, in fermentum neque ultricies. Vivamus vehicula tortor vitae lobortis tincidunt. Nunc a malesuada ligula. Nullam varius ex orci, quis porttitor dolor sollicitudin eu.
<br/><br/>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce rutrum quam nec leo tristique, ac ornare elit commodo. Suspendisse non erat sit amet dui tempus molestie vel id urna. Pellentesque euismod tortor et nisl blandit, et dictum nunc euismod. Mauris cursus ipsum non consequat posuere. Cras at finibus lectus. Quisque at quam mi. Proin mattis purus sit amet euismod sagittis.
<br/><br/>
Sed vitae erat id augue condimentum placerat nec nec mauris. Ut semper vehicula rhoncus. Suspendisse massa augue, euismod non volutpat ut, dictum in velit. Nullam dapibus fringilla mauris, eu lacinia elit porta vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam commodo ut elit a egestas. Etiam condimentum nisi eu quam imperdiet pharetra. Vestibulum aliquam laoreet dolor et egestas. Nunc ultricies neque sit amet ornare maximus. Aenean et tempus lectus. Morbi odio urna, hendrerit non efficitur eget, suscipit sollicitudin magna. Aenean ligula odio, rutrum sagittis nulla eget, eleifend cursus ex. Mauris vestibulum massa vel ligula laoreet maximus.
<br/><br/>
Donec at hendrerit purus. Proin finibus et elit vel sagittis. Sed ornare leo at consectetur dictum. Nullam eget neque ac libero pretium suscipit ac in nisl. Ut vulputate, enim et vulputate auctor, tellus eros facilisis lorem, id sollicitudin lacus turpis at magna. Maecenas interdum, mi id tempus hendrerit, purus dui faucibus enim, sit amet ornare est sapien id tellus. Vestibulum id sodales dui. Duis quis pellentesque lectus. Donec feugiat eget nulla et volutpat.
<br/><br/>
Donec ac mi nisi. Donec metus mauris, vehicula vitae tincidunt quis, luctus ac dui. Quisque iaculis cursus sapien et lobortis. Donec mollis quam vel sem tempor feugiat. Nulla vestibulum elit interdum lorem pretium, in porta metus accumsan. Proin id lacus elementum mauris lobortis fermentum. Vivamus eget purus quis enim pulvinar semper. Phasellus finibus efficitur nibh, ut mollis dolor gravida id. Maecenas dictum consectetur pellentesque.
<br/><br/>
In in nunc lectus. Phasellus posuere nisi id lorem hendrerit lacinia. In sagittis fringilla volutpat. Aenean malesuada justo vitae sapien dictum accumsan. Vestibulum tristique rutrum elit. Mauris non massa efficitur, vulputate leo eget, interdum neque. Vestibulum vel libero orci. Mauris nibh nibh, commodo et dictum id, sagittis at lorem. Vestibulum aliquam tellus turpis, elementum tristique arcu suscipit id. Integer vitae erat bibendum, gravida mi et, ornare est. Ut eu mauris vitae urna pharetra mattis vitae quis velit. Sed vel nunc ut tortor rhoncus ultrices. Cras quis dolor vel tortor placerat malesuada.
<br/><br/>
Nulla vel est vitae est eleifend commodo et tristique elit. Etiam eget tempor turpis, quis sodales felis. Morbi dignissim velit diam, non maximus mauris semper non. Vivamus dignissim quam sem, ac vestibulum felis finibus ut. Pellentesque aliquam sem id porttitor vestibulum. Suspendisse potenti. Integer accumsan volutpat libero, non pellentesque ante faucibus eget. Mauris aliquet viverra nulla, a luctus lacus finibus sed. Cras nec neque iaculis, ullamcorper mi non, pellentesque lacus. Cras vel velit id diam varius tincidunt. Fusce a nunc pretium, blandit tellus in, hendrerit enim. Ut ultrices vestibulum est quis interdum. Ut consectetur lectus at sagittis pellentesque. Suspendisse auctor sagittis tortor a luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Proin sapien orci, aliquam a placerat vitae, laoreet vitae felis. Duis a nisi id tortor dapibus placerat ac et tellus. Aliquam turpis ipsum, lobortis eget pretium lobortis, consectetur in magna. Sed finibus, nunc id rutrum ornare, neque nulla feugiat neque, sed feugiat nunc ligula id lectus. Duis volutpat interdum tempor. Pellentesque eu turpis at nunc placerat pulvinar. Nunc ultrices porta eros non feugiat. Donec consequat turpis nec sem condimentum, sed finibus lorem interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dapibus porta lorem a aliquet. Nunc quis arcu ultrices arcu condimentum posuere.
`;

const body  = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcScrollProgress = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scrolls$ = fromEvent(document, 'scroll');

const progres$ = scrolls$.pipe(
    //calculate the scroll progress in percentage
    map( calcScrollProgress),
    tap( progress => console.log(progress) )
);

progres$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});