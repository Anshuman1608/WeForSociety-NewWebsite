import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

// Define the types for props
interface RatingProps {
    rating: number;
    showLabel?: boolean;
    className?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, showLabel = false, className, ...rest }) => (
    <p className={classNames("mb-6", className)} {...rest}>
        <span>
            {[...Array(5)].map((_, i) => {
                const index = i + 1;
                let content;
                if (index <= Math.floor(rating)) {
                    content = (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                    );
                } else if (rating > i && rating < index + 1) {
                    content = (
                        <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />
                    );
                } else {
                    content = (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-200 dark:text-opacity-20" />
                    );
                }

                return <Fragment key={i}>{content}</Fragment>;
            })}
        </span>
        {showLabel && <span>{rating.toFixed(1)}</span>}
    </p>
);

export default Rating;
