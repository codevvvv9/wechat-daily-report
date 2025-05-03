import { ChatMessage, DailyDigest } from '../types';

interface GroupData {
  name: string;
  messages: Record<string, {
    messages: ChatMessage[];
    digest: DailyDigest;
  }>;
}

export const groupMessages: Record<string, GroupData> = {
  'group4': {
    name: '二二得四',
    messages: {
      '2025-05-01': {
        messages: [
          {
            id: '1',
            content: '我在家睡得早[捂脸]',
            sender: 'Sylvia Si',
            timestamp: '07:23',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '2',
            content: '早睡早起',
            sender: '不熟悉',
            timestamp: '07:27',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '3',
            content: '嗯呢',
            sender: 'Sylvia Si',
            timestamp: '07:28',
            type: 'text',
            category: '日常交流'
          }
        ],
        digest: {
          id: 'digest-2025-05-01',
          chatGroupId: 'group4',
          chatGroupName: '二二得四',
          date: '2025-05-01',
          topicHighlights: [
            {
              title: '作息交流',
              summary: '清晨时分，群成员就作息习惯展开了简短交流。Sylvia Si分享了自己在家早睡的情况，配以捂脸表情展现出一丝可爱的态度。其他成员对此表示认同，肯定了早睡早起的生活方式。这个简短的对话反映出群成员对健康作息的重视。',
              relatedMessages: [
                {
                  id: '1',
                  content: '我在家睡得早[捂脸]',
                  sender: 'Sylvia Si',
                  timestamp: '07:23',
                  type: 'text',
                  category: '日常交流'
                },
                {
                  id: '2',
                  content: '早睡早起',
                  sender: '不熟悉',
                  timestamp: '07:27',
                  type: 'text',
                  category: '日常交流'
                },
                {
                  id: '3',
                  content: '嗯呢',
                  sender: 'Sylvia Si',
                  timestamp: '07:28',
                  type: 'text',
                  category: '日常交流'
                }
              ],
              participants: ['Sylvia Si', '不熟悉'],
              timeRange: '07:23 - 07:28',
              category: '生活习惯',
              significance: '日常'
            }
          ],
          activityStats: {
            totalMessages: 3,
            activeUsers: ['Sylvia Si', '不熟悉'],
            peakTimeRange: '07:23 - 07:28',
            messageDistribution: {
              morning: 3,
              afternoon: 0,
              evening: 0,
              night: 0
            }
          },
          quotableMessages: [
            {
              content: '我在家睡得早[捂脸]',
              sender: 'Sylvia Si',
              timestamp: '07:23',
              context: '作息分享'
            }
          ],
          followUps: [
            {
              item: '关注群成员作息情况',
              priority: '低'
            }
          ]
        }
      }
    }
  },
  'group3': {
    name: '蕊宝的婚纱选择讨论',
    messages: {
      '2025-05-03': {
        messages: [
          {
            id: '1',
            content: '这个好好看',
            sender: '蕊宝儿',
            timestamp: '09:44',
            type: 'text',
            category: '婚纱讨论'
          },
          {
            id: '2',
            content: '[小程序|LusVeil陆纱婚纱]',
            sender: '蕊宝儿',
            timestamp: '09:44',
            type: 'link',
            category: '婚纱分享',
            tags: ['婚纱店', '上海']
          },
          {
            id: '3',
            content: '我想五月底去试试呢',
            sender: '蕊宝儿',
            timestamp: '10:10',
            type: 'text',
            category: '计划安排'
          },
          {
            id: '4',
            content: '上海',
            sender: '蕊宝儿',
            timestamp: '10:26',
            type: 'text',
            category: '位置信息'
          },
          {
            id: '5',
            content: '我师兄推荐的那两个',
            sender: '蕊宝儿',
            timestamp: '10:26',
            type: 'text',
            category: '推荐来源'
          },
          {
            id: '6',
            content: '[图片]婚纱款式展示',
            sender: '蕊宝儿',
            timestamp: '10:43',
            type: 'image',
            category: '婚纱展示',
            tags: ['婚纱款式']
          },
          {
            id: '7',
            content: '[图片]花朵装饰',
            sender: '蕊宝儿',
            timestamp: '12:39',
            type: 'image',
            category: '花艺分享'
          },
          {
            id: '8',
            content: '这个花开得好快',
            sender: '蕊宝儿',
            timestamp: '12:40',
            type: 'text',
            category: '花艺讨论'
          }
        ],
        digest: {
          id: 'digest-2025-05-03',
          chatGroupId: 'group3',
          chatGroupName: '蕊宝的婚纱选择讨论',
          date: '2025-05-03',
          topicHighlights: [
            {
              title: '婚纱店探讨与计划',
              summary: '蕊宝分享了上海LusVeil陆纱婚纱店的信息，这是她师兄推荐的选择之一。她表达了对店内婚纱的喜爱，并计划在五月底前往试纱。通过分享的多张婚纱照片，可以看出她对特定款式很感兴趣，并就细节与配色进行了深入讨论。整个交流过程展现出她对婚纱选择的认真态度和期待心情。',
              relatedMessages: [
                {
                  id: '1',
                  content: '这个好好看',
                  sender: '蕊宝儿',
                  timestamp: '09:44',
                  type: 'text',
                  category: '婚纱讨论'
                },
                {
                  id: '2',
                  content: '[小程序|LusVeil陆纱婚纱]',
                  sender: '蕊宝儿',
                  timestamp: '09:44',
                  type: 'link',
                  category: '婚纱分享',
                  tags: ['婚纱店', '上海']
                },
                {
                  id: '3',
                  content: '我想五月底去试试呢',
                  sender: '蕊宝儿',
                  timestamp: '10:10',
                  type: 'text',
                  category: '计划安排'
                }
              ],
              participants: ['蕊宝儿'],
              timeRange: '09:44 - 10:26',
              category: '婚纱选择',
              significance: '重要'
            },
            {
              title: '花艺装饰分享',
              summary: '在下午时分，蕊宝分享了一张花朵盛开的照片，引发了关于花艺装饰的讨论。她对花朵的生长速度表示惊喜，这个话题虽然简短但展现了她对婚礼细节的关注，以及对自然元素的欣赏。',
              relatedMessages: [
                {
                  id: '7',
                  content: '[图片]花朵装饰',
                  sender: '蕊宝儿',
                  timestamp: '12:39',
                  type: 'image',
                  category: '花艺分享'
                },
                {
                  id: '8',
                  content: '这个花开得好快',
                  sender: '蕊宝儿',
                  timestamp: '12:40',
                  type: 'text',
                  category: '花艺讨论'
                }
              ],
              participants: ['蕊宝儿'],
              timeRange: '12:39 - 12:41',
              category: '婚礼装饰',
              significance: '有趣'
            }
          ],
          activityStats: {
            totalMessages: 8,
            activeUsers: ['蕊宝儿'],
            peakTimeRange: '09:44 - 10:26',
            messageDistribution: {
              morning: 5,
              afternoon: 3,
              evening: 0,
              night: 0
            }
          },
          quotableMessages: [
            {
              content: '这个好好看',
              sender: '蕊宝儿',
              timestamp: '09:44',
              context: '婚纱欣赏'
            },
            {
              content: '我想五月底去试试呢',
              sender: '蕊宝儿',
              timestamp: '10:10',
              context: '试纱计划'
            }
          ],
          followUps: [
            {
              item: '安排五月底上海试纱行程',
              dueDate: '2025-05-31',
              assignee: '蕊宝儿',
              priority: '高'
            },
            {
              item: '收集更多LusVeil陆纱婚纱款式信息',
              dueDate: '2025-05-10',
              assignee: '蕊宝儿',
              priority: '中'
            }
          ]
        }
      }
    }
  },
  'group2': {
    name: '全栈实践课程答疑群',
    messages: {
      '2025-05-03': {
        messages: [
          {
            id: '1',
            content: '大家好，我是新来的助教小王',
            sender: '小王',
            timestamp: '09:00',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '2',
            content: '有同学在实现聊天功能时遇到了跨域问题，我来分享一下解决方案',
            sender: '小王',
            timestamp: '09:15',
            type: 'text',
            category: '技术讨论'
          },
          {
            id: '3',
            content: '[文档|CORS跨域最佳实践]',
            sender: '小王',
            timestamp: '09:16',
            type: 'link',
            category: '资源分享',
            tags: ['技术分享', 'Web开发']
          },
          {
            id: '4',
            content: '感谢助教！这个文档很有帮助',
            sender: '学生A',
            timestamp: '09:20',
            type: 'text',
            category: '技术讨论'
          },
          {
            id: '5',
            content: '请问周五下午3点的答疑会是线上还是线下？',
            sender: '学生B',
            timestamp: '10:30',
            type: 'text',
            category: '技术讨论'
          }
        ],
        digest: {
          id: 'digest-2025-05-03',
          chatGroupId: 'group2',
          chatGroupName: '全栈实践课程答疑群',
          date: '2025-05-03',
          topicHighlights: [
            {
              title: '技术问题解答',
              summary: '助教分享了关于CORS跨域问题的解决方案和最佳实践文档。',
              relatedMessages: [
                {
                  id: '2',
                  content: '有同学在实现聊天功能时遇到了跨域问题，我来分享一下解决方案',
                  sender: '小王',
                  timestamp: '09:15',
                  type: 'text',
                  category: '技术讨论'
                },
                {
                  id: '3',
                  content: '[文档|CORS跨域最佳实践]',
                  sender: '小王',
                  timestamp: '09:16',
                  type: 'link',
                  category: '资源分享',
                  tags: ['技术分享', 'Web开发']
                }
              ],
              participants: ['小王', '学生A'],
              timeRange: '09:15 - 09:20',
              category: '技术讨论',
              significance: '重要'
            },
            {
              title: '课程安排咨询',
              summary: '学生询问了周五答疑会的具体安排形式。',
              relatedMessages: [
                {
                  id: '5',
                  content: '请问周五下午3点的答疑会是线上还是线下？',
                  sender: '学生B',
                  timestamp: '10:30',
                  type: 'text',
                  category: '技术讨论'
                }
              ],
              participants: ['学生B'],
              timeRange: '10:30',
              category: '课程相关',
              significance: '重要'
            }
          ],
          activityStats: {
            totalMessages: 5,
            activeUsers: ['小王', '学生A', '学生B'],
            peakTimeRange: '09:00 - 09:30',
            messageDistribution: {
              morning: 5,
              afternoon: 0,
              evening: 0,
              night: 0
            }
          },
          quotableMessages: [
            {
              content: '有同学在实现聊天功能时遇到了跨域问题，我来分享一下解决方案',
              sender: '小王',
              timestamp: '09:15',
              context: '技术指导'
            }
          ],
          followUps: [
            {
              item: '确认并通知答疑会形式',
              dueDate: '2025-05-03',
              assignee: '小王',
              priority: '高'
            },
            {
              item: '整理CORS相关问题的常见解决方案',
              dueDate: '2025-05-04',
              assignee: '小王',
              priority: '中'
            }
          ]
        }
      }
    }
  },
  'group1': {
    name: '示例群聊',
    messages: {
      '2025-04-30': {
        messages: [
          {
            id: '1',
            content: '早上好！',
            sender: '张三',
            timestamp: '09:00',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '2',
            content: '今天天气真不错',
            sender: '李四',
            timestamp: '09:05',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '3',
            content: '[链接|技术分享：如何提高代码质量]',
            sender: '王五',
            timestamp: '10:00',
            type: 'link',
            category: '资源分享',
            tags: ['技术分享', '编程']
          },
          {
            id: '4',
            content: '@王五 这篇文章写得很好，我们项目中可以借鉴',
            sender: '赵六',
            timestamp: '10:15',
            type: 'text',
            category: '技术讨论'
          },
          {
            id: '5',
            content: '周末有人一起去爬山吗？',
            sender: '张三',
            timestamp: '11:30',
            type: 'text',
            category: '生活话题',
            tags: ['户外活动']
          }
        ],
        digest: {
          id: 'digest-2025-04-30',
          chatGroupId: 'group1',
          chatGroupName: '示例群聊',
          date: '2025-04-30',
          topicHighlights: [
            {
              title: '技术交流与分享',
              summary: '群成员分享了关于代码质量的技术文章，并就如何在项目中应用进行了讨论。',
              relatedMessages: [
                {
                  id: '3',
                  content: '[链接|技术分享：如何提高代码质量]',
                  sender: '王五',
                  timestamp: '10:00',
                  type: 'link',
                  category: '资源分享',
                  tags: ['技术分享', '编程']
                },
                {
                  id: '4',
                  content: '@王五 这篇文章写得很好，我们项目中可以借鉴',
                  sender: '赵六',
                  timestamp: '10:15',
                  type: 'text',
                  category: '技术讨论'
                }
              ],
              participants: ['王五', '赵六'],
              timeRange: '10:00 - 10:15',
              category: '技术讨论',
              significance: '重要'
            },
            {
              title: '日常社交活动',
              summary: '群成员讨论了周末户外活动的安排，计划组织爬山活动。',
              relatedMessages: [
                {
                  id: '5',
                  content: '周末有人一起去爬山吗？',
                  sender: '张三',
                  timestamp: '11:30',
                  type: 'text',
                  category: '生活话题',
                  tags: ['户外活动']
                }
              ],
              participants: ['张三'],
              timeRange: '11:30',
              category: '生活话题',
              significance: '有趣'
            }
          ],
          activityStats: {
            totalMessages: 5,
            activeUsers: ['张三', '李四', '王五', '赵六'],
            peakTimeRange: '09:00 - 10:00',
            messageDistribution: {
              morning: 5,
              afternoon: 0,
              evening: 0,
              night: 0
            }
          },
          quotableMessages: [
            {
              content: '今天天气真不错',
              sender: '李四',
              timestamp: '09:05',
              context: '日常问候'
            }
          ],
          followUps: [
            {
              item: '讨论代码质量改进方案',
              dueDate: '2025-05-01',
              assignee: '王五',
              priority: '高'
            },
            {
              item: '组织周末爬山活动',
              dueDate: '2025-05-04',
              assignee: '张三',
              priority: '中'
            }
          ]
        }
      }
    }
  }
};