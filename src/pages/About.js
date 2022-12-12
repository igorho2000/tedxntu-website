import React from "react";
import PageArea from "../components/PageArea";
import PageTextSection from "../components/PageTextSection";
import PageBanner from "../components/PageBanner";

export default function About() {
  return (
    <PageArea>
      <h1>關於我們</h1>
      <br />
      <PageBanner src="../home/about.jpg"></PageBanner>
      <br />
      <br />
      <PageTextSection title="社團簡介">
        <p>
          台大TED分享社是一個由學生組成，並積極和自身與社會現狀有所感的人共同開展公民教育討論的組織。我們以社團名義規劃展覽、沙龍、工作坊等TED理念推廣活動，並於每年五月舉辦由TED大會官方授權的TEDxNationalTaiwanUniversity年會，至今已邁入第七屆。我們期待透過我們辦裡的種種活動，與每個觀眾一同在與自己和社會對話的過程中探索，嘗試釐清社會中複雜現象背後的本質，加深對公民教育的認識。
        </p>
      </PageTextSection>
      <PageTextSection title="發起動機與目標">
        <p>
          我們看見生活周遭有太多問題在等待討論，且因為無從解決而感到無力；我們努力感知，卻在過程中不斷意識到自己仍過於狹隘而渺小；我們意識到，改變的發生，必須從教育開始。我們希望將TED的理念帶進台大校園，透過策展與短講等活動，促進獨立而負責的價值判斷，讓我們的社會與校園因為每一個人更貼近自己而自由，更懂得尊重、更能寬容。
        </p>
      </PageTextSection>
      <PageTextSection title="TEDx簡介">
        <p>
          TED取Technology、
          Entertainment和Design縮寫而來，以「讓值得的故事被聽見」為組織的核心旨意，是一個開啟不同價值間對話的平臺，更是一個用想法改變世界的舞臺。利用網路連結全世界，TED希望能將好的故事、點子傳播分享，讓知識不再有限制。
        </p>
        <br />
        <p>
          TED大會於2009年起，開放品牌授權，讓全世界的在地組織得以用TED的模式，在其品牌準則下，結合地方社群特色與理念，獨立策畫一個TED形式的活動。
        </p>
      </PageTextSection>
    </PageArea>
  );
}
