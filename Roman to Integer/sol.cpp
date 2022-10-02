class Solution
{
public:
    int romanToInt(string s)
    {
        int num = 0;
        for (int i = 0; i < s.length(); i++)
        {
            switch (s[i])
            {
            case 'M':
                num += 1000;
                break;
            case 'D':
                num += 500;
                break;
            case 'C':
                if (s[i + 1] == 'D')
                {
                    num += 400;
                    i++;
                    break;
                }
                else if (s[i + 1] == 'M')
                {
                    num += 900;
                    i++;
                    break;
                }
                else
                {
                    num += 100;
                    break;
                }
            case 'L':
                num += 50;
                break;
            case 'X':
                if (s[i + 1] == 'L')
                {
                    num += 40;
                    i++;
                    break;
                }
                else if (s[i + 1] == 'C')
                {
                    num += 90;
                    i++;
                    break;
                }
                else
                {
                    num += 10;
                    break;
                }
            case 'V':
                num += 5;
                break;
            case 'I':
                if (s[i + 1] == 'V')
                {
                    num += 4;
                    i++;
                    break;
                }
                else if (s[i + 1] == 'X')
                {
                    num += 9;
                    i++;
                    break;
                }
                else
                {
                    num += 1;
                    break;
                }
            }
        }
        return num;
    }
};