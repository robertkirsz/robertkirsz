<template>
  <div class="page works-page">
    <div class="content">
      <work-item v-for="work in works" :work="work" :key="work.name"></work-item>
    </div>
    <router-view />
  </div>
</template>

<script>
  import WorkItem from '@/components/WorkItem'

  export default {
    name: 'WorksPage',
    data () {
      return {
        works: [
          {
            'name': 'CSSOff 2011',
            'path': 'cssoff2011',
            'url': 'robertkirsz.pl/projekty/cssoff2011',
            'screenshot': {
              'desktop': 'TripleDare.png',
              'mobile': 'TripleDareMobile.png' },
            'responsiveness': {
              'desktop': 'true',
              'tablet': 'true',
              'mobile': 'true' },
            'description': 'Strona przygotowana na konkurs CSSOff, organizowany przez <a href="http://unmatchedstyle.com/news/cssoff-winners-2012.php">unmatchedstyle.com</a>. Zadaniem było zakodowanie strony na podstawie otrzymanego projektu graficznego. Nadesłano ponad 400 zgłoszeń, zająłem wtedy miejsce w połowie stawki. Było to moje pierwsze podejście do kodowania w sposób responsywny i pokochałem to od pierwszego wejrzenia.'
          },
          {
            'name': 'CSSOff 2013',
            'path': 'cssoff2013',
            'url': 'robertkirsz.pl/projekty/cssoff2013',
            'screenshot': {
              'desktop': 'CSSOffVolume3.png',
              'mobile': 'CSSOffVolume3Mobile.png' },
            'responsiveness': {
              'desktop': 'true',
              'tablet': 'false',
              'mobile': 'true' },
            'description': 'Kolejna edycja konkursu CSSOff, z dużo bardziej złożonym layoutem. Nie miałem jednak wtedy wystarczająco dużo wolnego czasu aby stronę skończyć i zgłosić do oceny, ale z tego co widzę na <a href="http://www.unmatchedstyle.com/cssoff">stronie</a>, konkurs chyba nie został rozstrzygnięty. Obecnie ukończona jest w jakichś 90%.'
          },
          {
            'name': 'Projektowanie wnętrz',
            'path': 'projektowanie-wnetrz',
            'url': 'robertkirsz.pl/projekty/interiordesign',
            'screenshot': {
              'desktop': 'InteriorDesign.png',
              'mobile': 'InteriorDesignMobile.png' },
            'responsiveness': {
              'desktop': 'true',
              'tablet': 'false',
              'mobile': 'true' },
            'description': 'Strona internetowa dla firmy zajmującej się projektowaniem wnętrz. Stworzona w oparciu o dostarczony projekt graficzny, niepodparta żadnym frameworkiem, z własnymi rozwiązaniami odnośnie RWD. Strona nie została ukończona ponieważ firma ostatecznie nie ruszyła.'
          },
          {
            'name': 'Vikaplant',
            'path': 'vikaplant',
            'url': 'vikaplant.pl',
            'screenshot': {
              'desktop': 'Vikaplant.png',
              'mobile': 'VikaplantMobile.png' },
            'responsiveness': {
              'desktop': 'true',
              'tablet': 'true',
              'mobile': 'true' },
            'description': 'Prosta strona zbudowana na Bootstrapie, pierwszy projekt na tym frameworku. Uwielbiam kodować, ale design to zdecydowanie nie moja specjalność.'
          },
          {
            'name': 'Symulator Gitary',
            'path': 'symulator-gitary',
            'url': 'robertkirsz.pl/gitary',
            'screenshot': {
              'desktop': 'Gitary.png',
              'mobile': '' },
            'responsiveness': {
              'desktop': 'true',
              'tablet': 'false',
              'mobile': 'false' },
            'description': 'Aplikacja multimedialna stworzona na potrzeby mojej pracy inżynierskiej i jednocześnie pierwsze poważniejsze podejście do programowania w JavaScripcie. Jest to symulator gitary wykorzystujący standard HTML5 Audio. Pozwala na zapisywanie akordów, nagrywanie sekwencji dźwięków, tworzeniu na ich podstawie zapisu w formie tabulatury i inne. Wszystkie jej funkcje są opisane w okienku pomocy, do którego można się dostać poprzez ikonę w prawym dolnym rogu ekranu głównego. Pełnię funkcjonalności i wydajności osiąga w najnowszym, desktopowym Chromie i Firefoxie (nie była tworzona z myślą o innych przeglądarkach czy urządzeniach mobilnych).'
          },
          {
            'name': 'MtG Life Counter',
            'path': 'mtg-life-counter',
            'url': 'robertkirsz.pl/mtg',
            'screenshot': {
              'desktop': '',
              'mobile': 'lifecounter.png' },
            'responsiveness': {
              'desktop': 'false',
              'tablet': 'true',
              'mobile': 'true' },
            'description': 'Aplikacja stworzona z myślą o fanach gry karcianej Magic: The Gathering. Jej funkcjonalność może być czarną magią dla zwykłych śmiertelników. Pozwala śledzić aktualną ilość życia, liczbę poison counterów, obrażenia zadane przez Commandera oraz umożliwia zagrywanie tokenów. W fazie testowej jest także opcja zapisywania statystyk z poszczególnych rozgrywek. Stworzona z myślą o urządzeniach mobilnych, testowana na Androidzie 4.3 z najnowszym Chromem. W wersji desktopowej symulowany jest wygląd aplikacji na smartfonie.'
          },
          {
            'name': 'Saper',
            'path': 'saper',
            'url': 'robertkirsz.pl/saper',
            'screenshot': {
              'desktop': 'Saper.png',
              'mobile': '' },
            'responsiveness': {
              'desktop': 'true',
              'tablet': 'true',
              'mobile': 'true' },
            'description': 'Klon kultowego Sapera znanego z Windowsów, moje pierwsze podejście do stworzenia czegoś w rodzaju gry. Stworzony głównie z myślą o desktopach i obsłudze myszką, jest jednak maksymalnie responsywny i powinien wyświetlać się poprawnie na ekranach o wszystkich rozmiarach.'
          }
        ]
      }
    },
    components: { WorkItem }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .works-page {
    justify-content: flex-start;
    background: $grey;
    &:after {
      background: linear-gradient(to top, $grey 25%, transparent);
    }
    .content {
      @include flex(row, wrap);
      padding: 20px 20px 100px;
      overflow-y: auto;
    }
  }
</style>
