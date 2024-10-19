<template>
    <div>
        <HeaderComponent />
        <div class="container">
            <h2 class="text-center my-4">أعضاء الاتحاد</h2>
            <div class="organization-chart">
                <div class="position president">
                    <div class="profile">
                        <img :src="`../../images/members/${president.member_id}.jpg`" :alt="president.member_name" class="circle-photo" v-if="president.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(president.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">رئيس الاتحاد</div>
                        <div class="faculty">{{ president.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ president.member_level || 'جاري التحميل..' }}</div>
                    </div>
                    <div class="subordinates">
                        <div class="position vice-president">
                            <div class="profile">
                                <img :src="`../../images/members/${vicePresident.member_id}.jpg`" :alt="vicePresident.member_name" class="circle-photo" v-if="vicePresident.member_id" />
                            </div>
                            <div class="details">
                                <div class="name">{{ formatmemberName(vicePresident.member_name) || 'جاري التحميل..' }}</div>
                                <div class="title">نائب رئيس الاتحاد</div>
                                <div class="faculty">{{ vicePresident.member_faculty || 'جاري التحميل..' }}</div>
                                <div class="level">{{ vicePresident.member_level || 'جاري التحميل..' }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <div class="executive-committee">
    <!-- Committee for Clubs -->
    <div class="committee-box">
        <div class="committee-title">لجنة الأسر</div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Clubs'].member_id}.jpg`" :alt="heads['Head_Clubs'].member_name" class="circle-photo" v-if="heads['Head_Clubs'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Clubs'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Clubs'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Clubs'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Clubs'].member_id}.jpg`" :alt="viceHeads['Vice_Clubs'].member_name" class="circle-photo" v-if="viceHeads['Vice_Clubs'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Clubs'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Clubs'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Clubs'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Clubs']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Committee for Sports -->
    <div class="committee-box">
        <div class="committee-title">اللجنة الرياضية</div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Sports'].member_id}.jpg`" :alt="heads['Head_Sports'].member_name" class="circle-photo" v-if="heads['Head_Sports'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Sports'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Sports'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Sports'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Sports'].member_id}.jpg`" :alt="viceHeads['Vice_Sports'].member_name" class="circle-photo" v-if="viceHeads['Vice_Sports'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Sports'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Sports'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Sports'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Sports']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Committee for Cultural -->
    <div class="committee-box">
        <div class="committee-title">اللجنة الثقافية والاعلامية </div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Cultural'].member_id}.jpg`" :alt="heads['Head_Cultural'].member_name" class="circle-photo" v-if="heads['Head_Cultural'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Cultural'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Cultural'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Cultural'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Cultural'].member_id}.jpg`" :alt="viceHeads['Vice_Cultural'].member_name" class="circle-photo" v-if="viceHeads['Vice_Cultural'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Cultural'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Cultural'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Cultural'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Cultural']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Committee for Arts -->
    <div class="committee-box">
        <div class="committee-title">اللجنة الفنية</div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Arts'].member_id}.jpg`" :alt="heads['Head_Arts'].member_name" class="circle-photo" v-if="heads['Head_Arts'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Arts'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Arts'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Arts'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Arts'].member_id}.jpg`" :alt="viceHeads['Vice_Arts'].member_name" class="circle-photo" v-if="viceHeads['Vice_Arts'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Arts'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Arts'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Arts'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Arts']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Committee for Scouts -->
    <div class="committee-box">
        <div class="committee-title">لجنة الجوالة والخدمة العامة</div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Scout'].member_id}.jpg`" :alt="heads['Head_Scout'].member_name" class="circle-photo" v-if="heads['Head_Scout'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Scout'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Scout'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Scout'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Scout'].member_id}.jpg`" :alt="viceHeads['Vice_Scout'].member_name" class="circle-photo" v-if="viceHeads['Vice_Scout'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Scout'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Scout'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Scout'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Scout']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Committee for Social -->
    <div class="committee-box">
        <div class="committee-title">اللجنة الاجتماعية والرحلات</div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Social'].member_id}.jpg`" :alt="heads['Head_Social'].member_name" class="circle-photo" v-if="heads['Head_Social'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Social'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Social'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Social'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Social'].member_id}.jpg`" :alt="viceHeads['Vice_Social'].member_name" class="circle-photo" v-if="viceHeads['Vice_Social'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Social'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Social'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Social'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Social']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Committee for Scientific -->
    <div class="committee-box">
        <div class="committee-title">اللجنة العلمية والتكنولوجية</div>
        <div class="committee-content">
            <div class="position head">
                <div class="profile">
                    <img :src="`../../images/members/${heads['Head_Scientific'].member_id}.jpg`" :alt="heads['Head_Scientific'].member_name" class="circle-photo" v-if="heads['Head_Scientific'].member_id" />
                </div>
                <div class="details">
                    <div class="name">{{ formatmemberName(heads['Head_Scientific'].member_name) || 'جاري التحميل..' }}</div>
                    <div class="title">أمين اللجنة</div>
                    <div class="faculty">{{ heads['Head_Scientific'].member_faculty || 'جاري التحميل..' }}</div>
                    <div class="level">{{ heads['Head_Scientific'].member_level || 'جاري التحميل..' }}</div>
                </div>
                <div class="subordinates">
                    <div class="position vice-head">
                        <div class="profile">
                            <img :src="`../../images/members/${viceHeads['Vice_Scientific'].member_id}.jpg`" :alt="viceHeads['Vice_Scientific'].member_name" class="circle-photo" v-if="viceHeads['Vice_Scientific'].member_id" />
                        </div>
                        <div class="details">
                            <div class="name">{{ formatmemberName(viceHeads['Vice_Scientific'].member_name) || 'جاري التحميل..' }}</div>
                            <div class="title">أمين مساعد اللجنة</div>
                            <div class="faculty">{{ viceHeads['Vice_Scientific'].member_faculty || 'جاري التحميل..' }}</div>
                            <div class="level">{{ viceHeads['Vice_Scientific'].member_level || 'جاري التحميل..' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members">
                <div class="member" v-for="member in members['Member_Scientific']" :key="member.member_id">
                    <div class="profile">
                        <img :src="`../../images/members/${member.member_id}.jpg`" :alt="member.member_name" class="circle-photo" v-if="member.member_id" />
                    </div>
                    <div class="details">
                        <div class="name">{{ formatmemberName(member.member_name) || 'جاري التحميل..' }}</div>
                        <div class="title">عضو باللجنة</div>
                        <div class="faculty">{{ member.member_faculty || 'جاري التحميل..' }}</div>
                        <div class="level">{{ member.member_level || 'جاري التحميل..' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../../public/global/headerComponent.vue';
import FooterComponent from '../../public/global/footerComponent.vue';

export default {
    name: 'FindCommittee',
    components: {
        HeaderComponent,
        FooterComponent,
    },
    data() {
        return {
            president: {},
            vicePresident: {},
            heads: {
                scout: {},
                scientific: {},
                cultural: {},
                clubs: {},
                arts: {},
                sports: {},
                social: {},
            },
            viceHeads: {
                scout: {},
                scientific: {},
                cultural: {},
                clubs: {},
                arts: {},
                sports: {},
                social: {},
            },
            members: {
                scout: [],
                scientific: [],
                cultural: [],
                clubs: [],
                arts: [],
                sports: [],
                social: [],
            },
            loading: true,
            errorMessage: '',
        };
    },
    mounted() {
        this.loadMemberData();
        window.scrollTo(0, 0); // Moved to first mounted() hook
    },
    methods: {
        async loadMemberData() {
            try {
                const response = await fetch('https://aiusu-backend.vercel.app/members');
                if (!response.ok) throw new Error('Failed to fetch member data');
                
                const memberData = await response.json();
                this.organizeMembers(memberData);
            } catch (error) {
                this.errorMessage = 'خطأ في تحميل بيانات الأعضاء';
                console.error('Error loading member data:', error);
            } finally {
                this.loading = false;
            }
        },

        organizeMembers(members) {
            // Extract president and vice president
            this.president = members.find(m => m.member_title === 'President') || {};
            this.vicePresident = members.find(m => m.member_title === 'Vice') || {};

            const titleMapping = [
                { key: 'scout', title: 'Scout' },
                { key: 'scientific', title: 'Scientific' },
                { key: 'cultural', title: 'Cultural' },
                { key: 'clubs', title: 'Clubs' },
                { key: 'arts', title: 'Arts' },
                { key: 'sports', title: 'Sports' },
                { key: 'social', title: 'Social' },
            ];

            // Organize heads and vice heads
            titleMapping.forEach(({ key, title }) => {
                this.heads[key] = members.find(m => m.member_title === `Head_${title}`) || {};
                this.viceHeads[key] = members.find(m => m.member_title === `Vice_${title}`) || {};
                this.members[key] = members.filter(m => m.member_title === `Member_${title}`) || [];
            });
        },

        formatMemberName(name) {
            if (!name) return '';
            const words = name.trim().split(' ');
            return words.length === 1 ? words[0] : `${words[0]} ${words[words.length - 1]}`;
        },
    },
};
</script>

<style scoped>
.container {
    padding: 20px;
    direction: rtl; /* Set the text direction to RTL */
}

.organization-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}

.position {
    margin: 10px 0;
    text-align: center;
}

.profile {
    margin: 10px;
}

.circle-photo {
    border-radius: 50%;
    width: 80px; /* Adjust size as necessary */
    height: 80px; /* Ensure it’s a circle */
}

.details {
    padding: 5px;
}

/* Ensure uniform size for names */
.name {
    font-weight: bold;
    color: #0e116c; /* Change to your desired color */
    font-size: 1rem; /* Set all names to the same size */
}

/* Ensure uniform size for titles */
.title {
    font-weight: bold;
    color: #cb2025;
    font-size: 1rem; /* Set all titles to the same size */
}

/* Ensure uniform size for committee titles */
.committee-title {
    font-weight: bold;
    font-size: 1.2rem; /* Set uniform size for committee titles */
    text-align: center;
    margin-bottom: 10px;
}

/* Ensure uniform size for faculty */
.faculty {
    font-size: 1rem; /* Set all faculty to the same size */
}

/* Ensure uniform size for levels */
.level {
    font-size: 1rem; /* Set all levels to the same size */
}

.subordinates {
    display: flex;
    justify-content: center;
}

.executive-committee {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping to create multiple rows */
    justify-content: space-between; /* Distribute space between committee boxes */
    gap: 10px; /* Optional: Add some spacing between boxes */
}

.committee-box {
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 10px;
    width: calc(50% - 10px); /* 2 boxes per row */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box; /* Include padding and border in element's total width and height */
}

.committee-content {
    display: flex;
    flex-direction: column;
}

.members {
    display: flex;
    flex-wrap: wrap; /* Allow members to wrap to the next line */
    justify-content: space-between; /* Distribute space between members */
}

/* Default member styling */
.member {
    width: calc(25% - 10px); /* 4 members per row with space */
    margin-bottom: 10px; /* Add some space between rows */
    box-sizing: border-box; /* Include padding and borders in width */
    text-align: center; /* Center member details */
}

/* Media Queries for Smaller Screens */
@media (max-width: 768px) {
    .committee-box {
        width: calc(50% - 20px); /* 2 boxes per row on tablets */
    }

    .member {
        width: calc(25% - 10px); /* 4 members per row on tablets */
    }

    .name, .title, .faculty, .level {
        font-size: 0.9rem; /* Slightly smaller font size on tablets */
    }

    .committee-title {
        font-size: 1rem; /* Reduce font size for committee titles */
    }

    .circle-photo {
        width: 60px; /* Adjust size for smaller screens */
        height: 60px; /* Ensure it’s a circle */
    }
}

@media (max-width: 576px) {
    .committee-box {
        width: 100%; /* 1 box per row on mobile */
    }

    .members {
        flex-direction: row; /* Ensure members are in a row on mobile */
        justify-content: space-between; /* Distribute members evenly */
    }

    .member {
        width: calc(25% - 10px); /* 4 members per row on mobile */
        margin-bottom: 10px; /* Maintain spacing between rows */
    }

    .name, .title, .faculty, .level {
        font-size: 0.5rem; /* Further reduce font size on small screens */
    }

    .committee-title {
        font-size: 0.9rem; /* Further reduce font size for committee titles */
    }

    .circle-photo {
        width: 60px; /* Maintain the circle size */
        height: 60px; /* Ensure it’s a circle */
    }
}
</style>
