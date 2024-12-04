import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1.10.7/+esm';
import duration from 'https://cdn.jsdelivr.net/npm/dayjs/plugin/duration/+esm';

dayjs.extend(duration);

function contagemDetempo() {
    const dataInicial = dayjs("2020-11-10T21:00:00");

    setInterval(() => {
        const dataAtual = dayjs();
        const diferenca = dataAtual.diff(dataInicial);
        const duracao = dayjs.duration(diferenca);

        const anos = duracao.years();
        const meses = duracao.months();
        const dias = duracao.days();
        const horas = duracao.hours();
        const minutos = duracao.minutes();
        const segundos = duracao.seconds();

        const tempoTexto = ` ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;

        document.querySelector(".contagem").innerHTML = tempoTexto;
    }, 1000);
}

export { contagemDetempo }