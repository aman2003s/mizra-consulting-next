import React from "react";
import styles from "./ServicesCard.module.scss";
import Image from "next/image";
import Button from "./Button";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {Array<{ label: string, highlight?: boolean } | string>} props.bullets
 * @param {string} props.buttonText
 * @param {function} [props.onButtonClick]
 * @param {import('next/image').StaticImageData | string} props.image
 * @param {string} [props.imageAlt]
 * @param {"left"|"right"} [props.imagePosition] - "left" or "right" (default: right)
 * @param {number} [props.imageWidth] - width for <Image />
 * @param {number} [props.imageHeight] - height for <Image />
 */
const ServicesCard = ({
  title,
  description,
  bullets = [],
  buttonText = "learn more",
  onButtonClick,
  image,
  imageAlt = "Service",
  imagePosition = "right",
  imageWidth = 540,
  imageHeight = 445,
}) => {
  return (
    <div
      className={
        styles.cardWrapper +
        " " +
        (imagePosition === "left" ? styles.reverse : "")
      }
    >
      <div className={styles.imageSection}>
        <div className={styles.imageFrame}>
          <Image
            src={image}
            alt={imageAlt}
            className={styles.image}
            width={imageWidth}
            height={imageHeight}
          />
          {/* Floating UI elements */}
        </div>
      </div>
      <div className={styles.textSection}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <ul className={styles.bullets}>
          {bullets.map((item, idx) =>
            typeof item === "string" ? (
              <li key={idx}>{item}</li>
            ) : (
              <li key={idx}>
                <b>{item.label}</b> : {item.description}
              </li>
            )
          )}
        </ul>
        <div>
          <Button text="Learn More" variant="textWithArrow" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
