import Head from "next/head";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";
import { BuildingAdvantages } from "../../components/buildingpage/advantages/advantages";
import { BuildingDescription } from "../../components/buildingpage/description/description";
import { Form } from "../../components/buildingpage/form/form";
import { BuildingGallery } from "../../components/buildingpage/gallery/gallery";
import { InnerHero } from "../../components/buildingpage/innerhero/innerhero";
import { BuildingMap } from "../../components/buildingpage/map/map";
import { NearestPlaces } from "../../components/buildingpage/nearestplaces/nearestplaces";

export default function BuildingInnerPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish | Inner</title>
      </Head>
      <BuildingLayout>
        <InnerHero />
        <BuildingDescription />
        <BuildingGallery title="" />
        <BuildingAdvantages />
        <Form />
        <NearestPlaces />
        <BuildingMap />
        <section className="section">
          <div className="box">
            <p className="p">
              Расположение комплекса имеет целый ряд преимуществ. «Династия»
              возводится на пересечении главных магистралей города, улицы
              Паркентская и проспекта Мирзо-Улугбека. Это местность со
              сложившейся инфраструктурой — всё необходимое в пешей доступности.
              Комплекс станет одним из самых развитых точек города, создав
              комфортную и высококлассную жилую среду в лучших архитектурных
              традициях. Расположение комплекса имеет целый ряд преимуществ.
              «Династия» возводится на пересечении главных магистралей города,
              улицы
            </p>
          </div>
        </section>
      </BuildingLayout>
    </>
  );
}
