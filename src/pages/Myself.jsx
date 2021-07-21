import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Theme, { Container } from "../assets/styles/Theme";
import ArrowIcon from "../assets/styles/Arrow";

export default function Myself() {
  return (
    <>
      <Container flex start>
        <ArrowIcon />
      </Container>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "10px 5px 5px rgba(191, 191, 191, 1), -1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="9 juillet 1983"
          iconStyle={{ background: `${Theme.colorYellow}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            C'est ici que tout commence...
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "-10px 5px 5px rgba(191, 191, 191, 1), 1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2001"
          iconStyle={{ background: `${Theme.colorStrawberry}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Baccalauréat Scientifique
          </h4>
          <p>
            Eh oui, j'ai toujours été partagée entre les langues et la
            science...
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "10px 5px 5px rgba(191, 191, 191, 1), -1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2003-2004"
          iconStyle={{ background: `${Theme.colorRed}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Arts English - Spanish
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Anglia Ruskin University, Cambridge, UK
          </h5>
          <p>
            Je vous l'avais dit ! Après mon bac, je me suis tournée vers une
            licence en Langues Etrangères Appliquées Anglais-Espagnol, et j'ai
            passé une année en Angleterre pour la valider.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "-10px 5px 5px rgba(191, 191, 191, 1), 1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2004-2005"
          iconStyle={{ background: `${Theme.colorPurple}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">Maîtrise LEA</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Université Sorbonne Nouvelle, Paris
          </h5>
          <p>
            En rentrant d'Angleterre, j'ai continué mon cursus en LEA. C'est
            après que ça se corse.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "10px 5px 5px rgba(191, 191, 191, 1), -1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2005-2006"
          iconStyle={{ background: `${Theme.colorOrange}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Préparation aux cursus scientifiques
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Université Paris-Saclay, Essonne
          </h5>
          <p>
            Eh oui, en prise au doute quant à mon parcours, j'ai suivi une année
            de remise à niveau en sciences, afin de passer le concours de
            contrôleur aérien, un métier qui m'a toujours attirée.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "-10px 5px 5px rgba(191, 191, 191, 1), 1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2006-2007"
          iconStyle={{ background: `${Theme.colorYellow}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            M2 LEA Anglais-Espagnol
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Université d'Evry, Essonne
          </h5>
          <p>
            Non, finalement, ce n'est pas pour moi, je reviens vite à mes
            premières amours !
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "10px 5px 5px rgba(191, 191, 191, 1), -1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2007 - 2021"
          iconStyle={{ background: `${Theme.colorStrawberry}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Adaptatrice dans l'audiovisuel
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Salariée chez VDM, freelance
          </h5>
          <p>
            Suite à mon stage de fin d'études, je suis embauchée et je consacre
            10 années au sous-titrage et à la voice-over de films,
            documentaires, etc, à la fois en tant que salariée et freelance.
            <br />
            En 2017, je quitte mon poste pour devenir freelance à temps complet.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "-10px 5px 5px rgba(191, 191, 191, 1), 1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="2021"
          iconStyle={{ background: `${Theme.colorOrange}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Formation développement web React-Node
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Wild Code School
          </h5>
          <p>
            Nous y voilà ! Envie d'évolution et de renouveau, je fais un bilan
            de compétences, et je découvre qu'apprendre à coder, c'est un peu
            comme apprendre une nouvelle langue.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow:
              "10px 5px 5px rgba(191, 191, 191, 1), -1em 0 .4em rgba(232, 232, 232, 1)",
          }}
          contentArrowStyle={{ borderRight: `7px solid white` }}
          date="Vers l'infini et au-delà"
          iconStyle={{ background: `${Theme.colorYellow}`, color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-subtitle">
            On continue la route ensemble ?
          </h4>
          <p>
            Ma formation est terminée, mais l'apprentissage, lui, ne fait que
            commencer ! Et je ne demande qu'à mettre en pratique mes
            connaissances...
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
