import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";

const Rate = ({ count, rating, color, onRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const getColor = (index) => {
        if (hoverRating >= index) {
            return color.filled;
        } else if (!hoverRating && rating >= index) {
            return color.filled;
        }

        return color.unfilled;
    };

    const starRating = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <FaStar
                    key={idx}
                    className="cursor-pointer"
                    onClick={() => onRating(idx)}
                    style={{ color: getColor(idx) }}
                    onMouseEnter={() => setHoverRating(idx)}
                    onMouseLeave={() => setHoverRating(0)}
                />
            ));
    }, [count, rating, hoverRating]);

    return <StyledRating>{starRating}</StyledRating>;
};

Rate.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.func,
    color: {
        filled: PropTypes.string,
        unfilled: PropTypes.string,
    },
};

Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#f5eb3b",
        unfilled: "#959494",
    },
};

export default Rate;

const StyledRating = styled.div`

        font-size: 25px;
        margin-top: 15px;
`;