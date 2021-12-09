const markWeight = 78, markHeight = 1.69, johnWeight = 92, johnHeight = 1.95;
const markWeight2 = 95, markHeight2 = 1.88, johnWeight2 = 85, johnHeight2 = 1.76;


const markBMI_1 = markWeight / (markHeight ** 2);
const johanBMI_1 = johnWeight / (johnHeight ** 2);
console.log(`Mark 1st BMI: ${markBMI_1} 
Johan 1st BMI: ${johanBMI_1}`)

if (markBMI_1 > johanBMI_1 )
{
  console.log(`Mark's BMI (${markBMI_1}) is Higher than Johan's (${johanBMI_1}) !`);
  }

else
{
  console.log(`Johan's BMI (${johanBMI_1}) is Higher than Mark's (${markBMI_1}) !`)
  }
const markBMI_2 = markWeight2 / (markHeight2 ** 2);
const johanBMI_2 = johnWeight2 / (johnHeight2 ** 2);
console.log(`Mark 2nd BMI: ${markBMI_2}
John 2nd BMI: ${johanBMI_2}`);

if (markBMI_2 > johanBMI_2 )
{
  console.log(`Mark's BMI (${markBMI_2}) is Higher than Johan's (${johanBMI_2}) !`);
  }

else
{
  console.log(`Johan's BMI (${johanBMI_2}) is Higher than Mark's (${markBMI_2}) !`)
  }