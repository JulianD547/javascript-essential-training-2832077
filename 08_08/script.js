/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */
const formatter = (value) => {
  let formattedValue = Intl.NumberFormat("en=CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);

  return formattedValue;
};

const tipCalculator = (sum, percentage) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(tip.toFixed(2))}
      Total:          ${formatter(total.toFixed(2))}
    `);
};

tipCalculator(29.95, 18, "de-DE", "EUR");
